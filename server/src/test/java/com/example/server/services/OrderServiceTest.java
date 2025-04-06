package com.example.server.services;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.server.model.Order;
import com.example.server.model.User;
import com.example.server.repository.UserRepository;

@ExtendWith(MockitoExtension.class)
class OrderServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private OrderService orderService;

    @Test
    void shouldAddOrderToUser() {
        User user = new User();
        user.setId("123");

        Order order = new Order();

        when(userRepository.findById("123")).thenReturn(Optional.of(user));
        when(userRepository.save(any(User.class))).thenReturn(user);

        User result = orderService.addOrderToUser("123", order);

        assertNotNull(result);
        verify(userRepository).save(user); 
    }

    @Test
    void shouldReturnNullIfUserNotFound() {
        Order order = new Order();

        when(userRepository.findById("123")).thenReturn(Optional.empty());
        User result = orderService.addOrderToUser("123", order);

        assertNull(result); 
    }
}
