package com.example.project;

import com.example.project.entity.Company;
import com.example.project.repository.CompanyRepository;
import com.example.project.repository.EmployeeRepository;
import com.example.project.repository.JobRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class ProjectApplication {

	private final CompanyRepository companyRepository;
	private final JobRepository jobRepository;
	private final EmployeeRepository employeeRepository;

	public ProjectApplication(CompanyRepository companyRepository, com.example.project.repository.JobRepository jobRepository, EmployeeRepository employeeRepository) {
		this.companyRepository = companyRepository;
		this.jobRepository = jobRepository;
		this.employeeRepository = employeeRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(ProjectApplication.class, args);
	}


}
