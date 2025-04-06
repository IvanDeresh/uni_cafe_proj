package com.example.server.services;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import com.example.server.dto.LoginResponse;
import com.example.server.model.User;
import com.example.server.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.example.server.security.JwtTokenUtil;;

@ExtendWith(MockitoExtension.class)
class AuthServiceTest {

    @Mock
    private UserRepository userRepository;
    
    @Mock
    private PasswordEncoder passwordEncoder;
    
    @Mock
    private JwtTokenUtil jwtTokenUtil;

    @InjectMocks
    private AuthService authService;

    private User user;

    @BeforeEach
    void setUp() {
        user = new User();
        user.setEmail("test@example.com");
        user.setPassword("encodedPassword");
        user.setUsername("TestUser");
    }

    @Test
    void shouldReturnLoginResponseWhenCredentialsValid() {
        when(userRepository.findByEmail("test@example.com")).thenReturn(user);
        when(passwordEncoder.matches("plainPassword", "encodedPassword")).thenReturn(true);
        when(jwtTokenUtil.generateToken("TestUser")).thenReturn("token123");

        User inputUser = new User();
        inputUser.setEmail("test@example.com");
        inputUser.setPassword("plainPassword");

        LoginResponse response = authService.login(inputUser);

        assertNotNull(response);
        assertEquals("token123", response.getToken());
        verify(userRepository).findByEmail("test@example.com");
    }

    @Test
    void shouldReturnNullWhenUserAlreadyExistsOnRegister() {
        when(userRepository.findByEmail("test@example.com")).thenReturn(user);

        LoginResponse response = authService.register(user);

        assertNull(response);
    }

    @Test
    void shouldRegisterNewUser() {
        when(userRepository.findByEmail("test@example.com")).thenReturn(null);
        when(passwordEncoder.encode(anyString())).thenReturn("encoded");
        when(jwtTokenUtil.generateToken(anyString())).thenReturn("token");

        LoginResponse response = authService.register(user);

        assertNotNull(response);
        assertEquals("token", response.getToken()); 
        verify(userRepository).save(any(User.class)); 
    }
}
