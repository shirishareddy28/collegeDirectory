package com.example.controller;

import com.example.model.User;
import com.example.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User authenticatedUser = userService.authenticate(user.getUsername(), user.getPassword(), user.getRole());
        if (authenticatedUser != null) {
            return "Bearer " + authenticatedUser.getId(); // Replace with actual token generation logic
        }
        throw new RuntimeException("Invalid credentials");
    }

    @GetMapping("/profile")
    public User getProfile(@RequestParam String username, @RequestParam String role) {
        return userService.getUserProfile(username, role);
    }
}
