package com.example.server.model;

import java.time.LocalDateTime;
import java.util.List;
import org.springframework.data.annotation.Id;

public class Order {
    @Id
    private String id;
    private LocalDateTime createdAt;
    private List<OrderItem> items;
    private double totalPrice;
    private int orderId;
    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    public List<OrderItem> getItems() {
        return items;
    }

    public void setItems(List<OrderItem> items) {
        this.items = items;
    }
    private int quantity;


    public String getOrderId() {
        return id;
    }

    public void setOrderId(String orderId) {
        this.id = orderId;
    }

   

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt() {
        this.createdAt = LocalDateTime.now();
    }
}
