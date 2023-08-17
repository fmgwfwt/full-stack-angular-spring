package com.example.project.service;

import com.example.project.entity.Company;
import com.example.project.entity.Employee;
import com.example.project.entity.Job;
import com.example.project.repository.CompanyRepository;
import com.example.project.repository.JobRepository;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompanyService {

    private final CompanyRepository companyRepository;
    private final JobRepository jobRepository;
    @Autowired
    public CompanyService(CompanyRepository companyRepository, JobRepository jobRepository) {
        this.companyRepository = companyRepository;
        this.jobRepository = jobRepository;
    }

    public Optional<Company> findCompanyById(Integer CompanyId){
        return companyRepository.findById(CompanyId);
    }
    public List<Company> getAllCompanies(){
        return companyRepository.findAll();
    }
    @Transactional
    public Company updateCompany(Integer companyId, Company updatedCompany) {
        Optional<Company> optionalCompany = companyRepository.findById(companyId);
        Company existingCompany = optionalCompany.orElseThrow(()->new EntityNotFoundException("Company not found"));

        BeanUtils.copyProperties(updatedCompany, existingCompany, "id");

        return companyRepository.save(existingCompany);

    }

    public boolean deleteCompany(Integer companyId) {
        Optional<Company> optionalCompany = companyRepository.findById(companyId);

        if (optionalCompany.isPresent()) {
            for(Job job: optionalCompany.get().getJobs()){
                for(Employee employee: job.getAppliedEmployees()){
                    employee.getAppliedJobs().remove(job);
                }
            }

            companyRepository.deleteById(companyId);
            return true;
        }
        return false;
    }

    public Company getCompanyById(Integer companyId) {
        Optional<Company> optionalCompany = companyRepository.findById(companyId);

        // If the company with the given ID exists, return it; otherwise, throw an error
        return optionalCompany.orElseThrow(() -> new EntityNotFoundException("Company with ID " + companyId + " does not exist"));
    }

    public Company createCompany(Company newCompany)  {
        // Perform any additional validation or business logic if needed before saving

        // Check if a company with the same name already exists
        Company existingCompany = companyRepository.findByCompanyName(newCompany.getCompanyName());
        if (existingCompany != null) {
            // Handle the case where the company already exists (e.g., return null or throw an exception)
            // For example, you can throw a custom exception like CompanyAlreadyExistsException
            throw new EntityExistsException("Company with name " + newCompany.getCompanyName() + " already exists");
        }
        return companyRepository.save(newCompany);
    }

}
