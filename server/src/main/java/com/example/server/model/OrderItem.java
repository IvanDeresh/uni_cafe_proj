package com.example.server.model;

import java.util.List;

public class OrderItem {
    private int id;
    private String image;
    private String name;
    private String description;
    private double price;
    private int quantity;
    private List<HitCategorie> categories;

    public OrderItem() {
    }

    public OrderItem(int id, String image, String name, String description, double price, int quantity, List<HitCategorie> categories) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.categories = categories;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public List<HitCategorie> getCategories() {
        return categories;
    }

    public void setCategories(List<HitCategorie> categories) {
        this.categories = categories;
    }
}
