package com.example.project.auth;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class RoleService {

  private final RoleRepository roleRepository;

  public RoleService(RoleRepository roleRepository) {
      this.roleRepository = roleRepository;
  }
  public Page<Role> findAll(Pageable pageable) {
      return roleRepository.findAll(pageable);
  }

}
