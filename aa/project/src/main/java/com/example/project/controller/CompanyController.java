package com.example.project.controller;

import com.example.project.entity.Company;
import com.example.project.entity.Employee;
import com.example.project.service.CompanyService;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/")
public class CompanyController {
    private final CompanyService companyService;
    @Autowired
    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping("/hi")
    public String helloooo(){
        return "hello";
    }
    @GetMapping("/companies")
    public ResponseEntity<List<Company>> getAllCompanies(){
        List<Company> companyList = companyService.getAllCompanies();
        return ResponseEntity.ok(companyList);
    }
    @GetMapping("/companies/{companyId}")
    public ResponseEntity<Company> getCompany(@PathVariable("companyId") Integer companyId){
        //check the errors: user does not exist etc.
        Optional<Company> optionalCompany = companyService.findCompanyById(companyId);
        if (optionalCompany.isPresent()) {
            // If the Company entity exists, retrieve it from the Optional and return it with a 200 OK status
            Company company = optionalCompany.get();
            return ResponseEntity.ok(company);
        } else {
            // If the Company entity does not exist, return a 404 Not Found status
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/companies/{companyId}")
    public ResponseEntity<Void> deleteCompany(@PathVariable Integer companyId) {
        if (companyService.deleteCompany(companyId)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping("/companies")
    public ResponseEntity<Company> createCompany(@Valid @RequestBody Company newCompany, BindingResult result) {
        // Perform any necessary validation or business logic before saving
        // For example, check if the newCompany has all the required fields, etc.
        if (result.hasErrors()) {
            // Handle validation errors (e.g., return an error response)
            return ResponseEntity.badRequest().build();
        }
        // If the data is valid, save the company
        Company company = companyService.createCompany(newCompany);
        return ResponseEntity.ok(company);
    }
    @PutMapping("/companies/{companyId}")
    public ResponseEntity<Company> updateCompany(
            @PathVariable Integer companyId,
            @RequestBody Company updatedCompany
    ) {
        // Retrieve the existing company from the database
        Company existingCompany = companyService.getCompanyById(companyId);
       if (existingCompany == null) {
           return ResponseEntity.notFound().build();
       }
        // Save the updated company in the database
        updatedCompany = companyService.updateCompany(companyId, updatedCompany);

        return ResponseEntity.ok(updatedCompany);
    }
}
