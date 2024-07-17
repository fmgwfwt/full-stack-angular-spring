package com.example.project.domain.user;


import com.example.project.auth.Role;
import com.example.project.auth.RoleRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;

@Service
public class UserService {


    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    public UserService(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    public Optional<User> findUserById(Long UserId) {
        return userRepository.findById(UserId);
    }

    public Page<User> findAllUsers(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    public Page<Role> findAllRoles(Pageable pageable) {
        return roleRepository.findAll(pageable);
    }


    public User updateUser( Long userId, User updatedUser) {

        Optional<User> optionalUser = userRepository.findById(userId);
        User existingUser = optionalUser.orElseThrow(() -> new EntityNotFoundException("User not found"));
        existingUser.setEmail(updatedUser.getEmail());
        existingUser.setUsername(updatedUser.getUsername());
        existingUser.setRoles(updatedUser.getRoles());

        return userRepository.save(existingUser);

    }

    public Set<Role> findRoleByUserId(Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        User existingUser = optionalUser.orElseThrow(() -> new EntityNotFoundException("User not found"));
        return existingUser.getRoles();
    }


    public boolean deleteUser(Long UserId) {
        Optional<User> optionalUser = userRepository.findById(UserId);
        if (optionalUser.isPresent()) {
            userRepository.deleteById(UserId);
            return  true;
        }
        return  false;
    }



}
