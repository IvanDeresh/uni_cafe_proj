package com.example.server.dto;

import com.example.server.model.User;

public class LoginResponse {
    private UserDTO user;
    private String token;

    public LoginResponse(User user, String token) {
        this.user = new UserDTO(user);
        this.token = token;
    }

    public UserDTO getUser() {
        return user;
    }

    public String getToken() {
        return token;
    }

    public void setUser(UserDTO user) {
        this.user = user;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
