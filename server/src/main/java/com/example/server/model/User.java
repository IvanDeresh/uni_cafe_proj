package com.example.server.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {
    @Id
    private String id;
    private String username;
    private String email;
    private String password;
    private Role role;
    private List<Order> orders = new ArrayList<>();

    private LocalDateTime createdAt;

    public String getUsername(){
        return this.username;
    }
   
    public List<Order> getOrders(){
        return this.orders;
    }

    public String getId(){
        return this.id;
    } 
    
    public String getRole() {
        return (this.role != null) ? this.role.name() : "USER";  
    }
    
    
    public void setRole(Role role) {
        if (role == null) {
            this.role = Role.USER;  
        } else {
            this.role = role;
        }
    }

    public LocalDateTime getCreatedAt(){
        return this.createdAt;
    }
    public void setCreatedAt(){
         this.createdAt = LocalDateTime.now();
    }

    public String getPassword(){
        return this.password;
    }
    public String getEmail(){
        return this.email;
    }
    public void setPassword(String password){
        this.password = password;
    }
    public void addOrder(Order order){
       this.orders.add(order);
    }
}
