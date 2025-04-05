package com.example.server.model;
 enum CategoryTitle {
    HITS,
    BREAKFAST,
    DINNER,
    WITHOUT_LACTOSE
}
public class HitCategorie {
    private CategoryTitle title; 
    private String icon;

    public HitCategorie() {
    }

    public HitCategorie(CategoryTitle title, String icon) {
        this.title = title;
        this.icon = icon;
    }

    public CategoryTitle getTitle() {
        return title;
    }

    public void setTitle(CategoryTitle title) {
        this.title = title;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }
}
