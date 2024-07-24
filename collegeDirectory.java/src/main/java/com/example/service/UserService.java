package com.example.service;

import com.example.model.User;

public interface UserService {
    User authenticate(String username, String password, String role);
    User getUserProfile(String username, String role);
}
