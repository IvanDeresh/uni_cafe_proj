package com.example.server.services;

import com.example.server.model.Order;
import com.example.server.model.User;
import com.example.server.repository.UserRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    private final UserRepository userRepository;

    @Autowired
    public OrderService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User addOrderToUser(String userId, Order order) {
        Optional<User> optionalUser = userRepository.findById(userId);
        order.setCreatedAt();
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.addOrder(order);
            return userRepository.save(user);
        } else {
            return null; 
        }
    }
}
