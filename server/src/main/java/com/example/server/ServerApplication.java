package com.example.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}
    @GetMapping("/")
	public String apiRoot(){
		return "Hello, world!";
	}
	@GetMapping("/1")
	public String apiRoot1(){
		return "Hello, world!1";
	}
}
