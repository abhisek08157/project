package com.silicon.management.controller;

import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.silicon.management.model.Login;
import com.silicon.management.service.LoginService;

//AuthController.java
@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class AuthController {

 @Autowired
 private LoginService loginService;
 @PostMapping("/login")
 public ResponseEntity<?> login(@RequestBody Login request) {
     Optional<Login> optionalUser = loginService.findByUsername(request.getUsername());

     if (optionalUser.isPresent()) {
         Login user = optionalUser.get();
         if (user.getPassword().equals(request.getPassword())) {
             return ResponseEntity.ok(Map.of("role", user.getRole()));
         }
     }

     return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                          .body("Invalid username or password");
 }
}

