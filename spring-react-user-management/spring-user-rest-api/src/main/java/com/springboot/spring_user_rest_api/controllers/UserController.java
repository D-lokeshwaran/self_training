package com.springboot.spring_user_rest_api.controllers;

import com.springboot.spring_user_rest_api.models.User;
import com.springboot.spring_user_rest_api.repositories.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.Duration;
import java.util.*;

@RestController
@CrossOrigin
@RequestMapping("/users")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/getAllUsers")
    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/createUser")
    public ResponseEntity<User> createUser(@RequestBody Map<String, Object> body) {
        User user = new User();
        user.fillUser(body);
        userRepository.save(user);
        return ResponseEntity.accepted().build();
    }

    @GetMapping("/{id}")
    public User findUserById(@PathVariable Long id) {
        User user = findById(id);
        return user;
    }

    @PutMapping("/updateUser/{id}")
    public ResponseEntity<?> updateUserById(@PathVariable Long id, @RequestBody Map<String, Object> body) {
        User user = findById(id);
        user.fillUser(body);
        userRepository.save(user);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUserById(@PathVariable Long id) {
        userRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    public User findById(Long id) {
        User user = userRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("id: " + id));
        return user;
    }

}