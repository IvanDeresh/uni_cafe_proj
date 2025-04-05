package com.example.server.services;

import com.example.server.dto.LoginResponse;
import com.example.server.model.Role;
import com.example.server.model.User;
import com.example.server.repository.UserRepository;
import com.example.server.security.JwtTokenUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtTokenUtil jwtTokenUtil;

    @Autowired
    public AuthService(UserRepository userRepository, PasswordEncoder passwordEncoder, JwtTokenUtil jwtTokenUtil) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtTokenUtil = jwtTokenUtil;
    }

    public LoginResponse login(User user) {
        User foundUser = userRepository.findByEmail(user.getEmail());
        if (foundUser != null && passwordEncoder.matches(user.getPassword(), foundUser.getPassword())) {
            String token = jwtTokenUtil.generateToken(foundUser.getUsername());
            return new LoginResponse(foundUser, token);
        }
        return null;
    }
    


    public LoginResponse register(User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
        
            return null; 
        }
    
        user.setRole(Role.USER);  
        user.setCreatedAt();
        user.setPassword(passwordEncoder.encode(user.getPassword()));  
        userRepository.save(user);  
    
        String token = jwtTokenUtil.generateToken(user.getUsername()); 
        return new LoginResponse(user, token); 
    }
    
    
    
    
}
