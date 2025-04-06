package com.example.server.controller;

import com.example.server.model.User;
import com.example.server.services.AuthService;
import com.example.server.dto.LoginResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@ExtendWith(MockitoExtension.class)
class AuthControllerIntegrationTest {

    private MockMvc mockMvc;

    @Mock
    private AuthService authService;

    @InjectMocks
    private AuthController authController;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Test
    void shouldRegisterUser() throws Exception {
        User user = new User();
        user.setEmail("test@example.com");
        user.setPassword("1234");

        LoginResponse response = new LoginResponse(user, "token123");

        when(authService.register(any(User.class))).thenReturn(response);

        mockMvc = MockMvcBuilders.standaloneSetup(authController).build();

        mockMvc.perform(post("/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(user)))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.token").value("token123"));
    }

    @Test
    void shouldReturnConflictIfUserExists() throws Exception {
        when(authService.register(any(User.class))).thenReturn(null);

        mockMvc = MockMvcBuilders.standaloneSetup(authController).build();

        mockMvc.perform(post("/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(new User())))
            .andExpect(status().isConflict());
    }
}
