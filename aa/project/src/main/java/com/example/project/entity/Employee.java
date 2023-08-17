package com.example.project.entity;


import jakarta.persistence.*;
import lombok.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String employeeName;
    private String employeeSurname;
    private String employeeEmail;
    private String employeeCity;
    private String employeeCvPath;
    private String employeeYearsOfExperience;
    private String employeeSocialLink;
    private String employeeIntroduction;
    private String employeePassword;
    private String employeeUsername;

    @ManyToMany
    @JoinTable(
            name = "jobs_applied",
            joinColumns = @JoinColumn(name = "emp_id"),
            inverseJoinColumns = @JoinColumn(name = "job_id")
    )
    private Set<Job> appliedJobs = new HashSet<>();

}
