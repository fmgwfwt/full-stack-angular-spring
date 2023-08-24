package com.example.project.domain.company;

import com.example.project.domain.job.Job;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="company")
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotBlank
    private String companyName;
    @NotBlank
    private String companyLocation;
    private String companyLogoPath;
    private Integer companySize;

    @JsonIgnore
    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL, orphanRemoval = true )
    private Set<Job> jobs = new HashSet<>();

    public void addJob(Job job){
        jobs.add(job);
    }
}
