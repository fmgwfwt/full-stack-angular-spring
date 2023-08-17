package com.example.project.controller;

import com.example.project.entity.Employee;
import com.example.project.entity.Job;
import com.example.project.repository.EmployeeRepository;
import com.example.project.service.EmployeeService;
import com.example.project.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class EmployeeController {
    private final EmployeeService employeeService;
    private final JobService jobService;
    @Autowired
    public EmployeeController(EmployeeService employeeService, JobService jobService) {
        this.employeeService = employeeService;
        this.jobService = jobService;
    }

    @GetMapping("/employees")
    public ResponseEntity<List<Employee>> getAllEmployees(){
        List<Employee> employeeList = employeeService.getAllEmployees();
        return ResponseEntity.ok(employeeList);
    }

    @GetMapping("/employees/{employeeId}")
    public ResponseEntity<Employee> getEmployee(@PathVariable("employeeId") Integer employeeId){
        //check the errors: user does not exist etc.
        Employee employee = employeeService.findEmployeeById(employeeId).get();
        return ResponseEntity.ok(employee);
    }
    @DeleteMapping("/employees/{employeeId}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Integer employeeId) {
        if (employeeService.deleteEmployee(employeeId)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping("/employees")
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee newEmployee) {
        // Perform any necessary validation or business logic before saving
        // For example, check if the newCompany has all the required fields, etc.

        // Save the new company in the database
        Employee savedEmployee = employeeService.createEmployee(newEmployee);

        return ResponseEntity.ok(savedEmployee);
    }
    @PutMapping("/employees/{employeeId}")
    public ResponseEntity<Employee> updateEmployee(
            @PathVariable Integer employeeId,
            @RequestBody Employee updatedEmployee
    ) {
        // Retrieve the existing company from the database
        Employee existingEmployee = employeeService.getEmployeeById(employeeId);
        if (existingEmployee == null) {
            return ResponseEntity.notFound().build();
        }

        // Save the updated company in the database
        updatedEmployee = employeeService.updateEmployee(employeeId, updatedEmployee);

        return ResponseEntity.ok(updatedEmployee);
    }

    @PutMapping("/{employeeId}/jobs/{jobId}")
    public ResponseEntity<Employee> applyForJob(
            @PathVariable Integer jobId,
            @PathVariable Integer employeeId)
    {
        Job job = jobService.getJobById(jobId);
        Employee employee = employeeService.getEmployeeById(employeeId);
        if (employee == null) {
            return ResponseEntity.notFound().build();
        }

        employee = employeeService.applyForJob(employeeId,job);

        return ResponseEntity.ok(employee);
    }
}
