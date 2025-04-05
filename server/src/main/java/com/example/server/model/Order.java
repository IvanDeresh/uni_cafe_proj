package com.example.server.model;

import java.time.LocalDateTime;
import java.util.List;

public class Order {
    private String id;
    private LocalDateTime createdAt;
    private List<OrderItem> items;
    private double totalPrice;
}
