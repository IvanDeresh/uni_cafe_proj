package com.example.server.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig

{
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }    

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        // Вимикаємо авторизацію
        http
            .authorizeRequests()
                .requestMatchers("/**").permitAll()  // Використовуємо requestMatchers замість antMatchers
            .and()
            .csrf().disable();  // Вимикаємо CSRF захист, якщо це необхідно для вашого випадку
        return http.build();
    }
}
