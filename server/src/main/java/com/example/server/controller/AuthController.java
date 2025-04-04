package com.example.server.controller;

import com.example.server.model.User;
import com.example.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;


    // @Autowired
    // private PasswordEncoder passwordEncoder;

    // Реєстрація користувача
    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody User user) {
        // Перевірка наявності користувача
        if (userRepository.findByUsername(user.getUsername()) != null) {
            return new ResponseEntity<>("User already exists", HttpStatus.BAD_REQUEST);
        }
        userRepository.save(user);
        return new ResponseEntity<>("User registered successfully", HttpStatus.CREATED);
    }

    // Логін користувача
    @PostMapping("/login")
public ResponseEntity<Object> login(@RequestBody User user) {
    System.out.println("Attempting login for user: " + user.getUsername());
    User foundUser = userRepository.findByUsername(user.getUsername());
    if (foundUser != null) {
        return new ResponseEntity<>(foundUser,HttpStatus.OK);
    } else {
        System.out.println("Invalid credentials for user: " + user.getUsername());
        return new ResponseEntity<>("Invalid credentials", HttpStatus.UNAUTHORIZED);
    }
}

    
    
}
