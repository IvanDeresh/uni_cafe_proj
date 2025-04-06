package com.example.server.controller;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.example.server.model.Order;
import com.example.server.model.User;
import com.example.server.services.OrderService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@ExtendWith(MockitoExtension.class)
class OrderControllerIntegrationTest {

    private MockMvc mockMvc;

    @Mock
    private OrderService orderService;

    @InjectMocks
    private OrderController orderController;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Test
    void shouldAddOrderToUser() throws Exception {
        User user = new User();
        user.setId("1");
        Order order = new Order();

        when(orderService.addOrderToUser(eq("1"), any(Order.class))).thenReturn(user);

        mockMvc = MockMvcBuilders.standaloneSetup(orderController).build();

        mockMvc.perform(post("/orders/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(order)))
            .andExpect(status().isOk());
    }

    @Test
    void shouldReturnNotFoundIfUserMissing() throws Exception {
        when(orderService.addOrderToUser(eq("1"), any(Order.class))).thenReturn(null);

        mockMvc = MockMvcBuilders.standaloneSetup(orderController).build();

        mockMvc.perform(post("/orders/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(new Order())))
            .andExpect(status().isNotFound());
    }
}
