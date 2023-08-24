package com.example.project;

import com.example.project.domain.company.CompanyRepository;
import com.example.project.domain.employee.EmployeeRepository;
import com.example.project.domain.job.JobRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ProjectApplication {

	private final CompanyRepository companyRepository;
	private final JobRepository jobRepository;
	private final EmployeeRepository employeeRepository;

	public ProjectApplication(CompanyRepository companyRepository, JobRepository jobRepository, EmployeeRepository employeeRepository) {
		this.companyRepository = companyRepository;
		this.jobRepository = jobRepository;
		this.employeeRepository = employeeRepository;
	}

	public static void main(String[] args) {
		SpringApplication.run(ProjectApplication.class, args);
	}


}
