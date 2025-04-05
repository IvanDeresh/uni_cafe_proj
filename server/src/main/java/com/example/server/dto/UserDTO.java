package com.example.server.dto;

import com.example.server.model.Order;
import com.example.server.model.User;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class UserDTO {
    private String id;
    private String name;
    private String email;
    private String role;
    private LocalDateTime createdAt;
 private List<Order> orders = new ArrayList<>();

    public UserDTO() {}

    public UserDTO(User user) {
        this.id = user.getId();
        this.name = user.getUsername();
        this.email = user.getEmail();
        this.role = user.getRole();
        this.createdAt = user.getCreatedAt();
        this.orders = user.getOrders();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public List<Order> getOrders() {
        return orders;
    }

    public void setOrders(List<Order> orders) {
        this.orders = orders;
    }
}
