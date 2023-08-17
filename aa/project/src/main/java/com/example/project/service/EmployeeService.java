package com.example.project.service;

import com.example.project.entity.Company;
import com.example.project.entity.Employee;
import com.example.project.entity.Job;
import com.example.project.repository.EmployeeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;
    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public Employee createEmployee(Employee newEmployee) {
        Employee existingEmployee = employeeRepository.findByEmployeeEmail(newEmployee.getEmployeeEmail());
        if (existingEmployee != null) {
            // Handle the case where the company already exists (e.g., return null or throw an exception)
            // For example, you can throw a custom exception like CompanyAlreadyExistsException
            return null;
        }
        return employeeRepository.save(newEmployee);
    }

    public Optional<Employee> findEmployeeById(Integer EmployeeId){
        return employeeRepository.findById(EmployeeId);
    }
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    public boolean deleteEmployee(Integer employeeId) {
        Optional<Employee> optionalCompany = employeeRepository.findById(employeeId);

        if (optionalCompany.isPresent()) {
            employeeRepository.deleteById(employeeId);
            return true;
        }
        return false;
    }
    @Transactional
    public Employee updateEmployee(Integer employeeId, Employee updatedEmployee) {
        Optional<Employee> optionalEmployee = employeeRepository.findById(employeeId);
        Employee existingEmployee = optionalEmployee.get();
        // Update only the fields that are not null in the request body
        if (updatedEmployee.getEmployeeName() != null) {
            existingEmployee.setEmployeeName(updatedEmployee.getEmployeeName());
        }
        if (updatedEmployee.getEmployeeSurname() != null) {
            existingEmployee.setEmployeeSurname(updatedEmployee.getEmployeeSurname());
        }
        if (updatedEmployee.getEmployeeEmail() != null) {
            existingEmployee.setEmployeeEmail(updatedEmployee.getEmployeeEmail());
        }
        if (updatedEmployee.getEmployeeCity() != null) {
            existingEmployee.setEmployeeCity(updatedEmployee.getEmployeeCity());
        }
        if (updatedEmployee.getEmployeeCvPath() != null) {
            existingEmployee.setEmployeeCvPath(updatedEmployee.getEmployeeCvPath());
        }
        if (updatedEmployee.getEmployeeYearsOfExperience() != null) {
            existingEmployee.setEmployeeYearsOfExperience(updatedEmployee.getEmployeeYearsOfExperience());
        }
        if (updatedEmployee.getEmployeeSocialLink() != null) {
            existingEmployee.setEmployeeSocialLink(updatedEmployee.getEmployeeSocialLink());
        }
        if (updatedEmployee.getEmployeeIntroduction() != null) {
            existingEmployee.setEmployeeIntroduction(updatedEmployee.getEmployeeIntroduction());
        }
        if (updatedEmployee.getEmployeeUsername() != null) {
            existingEmployee.setEmployeeUsername(updatedEmployee.getEmployeeUsername());
        }
        if (updatedEmployee.getEmployeePassword() != null) {
            existingEmployee.setEmployeePassword(updatedEmployee.getEmployeePassword());
        }


        return employeeRepository.save(existingEmployee);
    }

    public Employee getEmployeeById(Integer employeeId) {
        Optional<Employee> optionalEmployee = employeeRepository.findById(employeeId);

        // If the company with the given ID exists, return it; otherwise, return null
        return optionalEmployee.orElse(null);
    }

    public Employee applyForJob(Integer employeeId, Job job){
        Optional<Employee> optionalEmployee = employeeRepository.findById(employeeId);

        if(optionalEmployee.isPresent()){
            optionalEmployee.get().getAppliedJobs().add(job);;

            return employeeRepository.save(optionalEmployee.get());
        }

        return null;
    }
}
