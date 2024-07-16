package com.example.project.domain.user;

import com.example.project.auth.Role;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.Set;

@RestController
@RequestMapping("/")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/users/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable Long userId) {
        Optional<User> user = userService.findUserById(userId);
        return user.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/users")
    public ResponseEntity<Page<User>> getAllUsers(Pageable pageable) {
        Page<User> users = userService.findAllUsers(pageable);
        return ResponseEntity.ok(users);
    }

    @GetMapping("/users/roles/{userId}")
    public ResponseEntity<Set<Role>> getUserRoles(@PathVariable Long userId) {
        Set<Role> roles = userService.findRoleByUserId(userId);
        return ResponseEntity.ok(roles);
    }

    @PutMapping("/users/roles/{userId}")
    public ResponseEntity<User> updateUserRole(@PathVariable Long userId, @RequestBody User updatedUser) {
        try {
            User user = userService.updateUserRole(userId, updatedUser);
            return ResponseEntity.ok(user);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/users/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long userId) {
        if (userService.deleteUser(userId)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
