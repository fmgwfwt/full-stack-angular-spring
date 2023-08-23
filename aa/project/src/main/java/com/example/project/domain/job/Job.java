package com.example.project.domain.job;

import com.example.project.domain.employee.enums.EmploymentType;
import com.example.project.domain.employee.enums.ExpertiseLevel;
import com.example.project.domain.company.Company;
import com.example.project.domain.employee.Employee;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.Transient;

import java.time.LocalDate;
import java.time.Period;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Job {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @JsonIgnore
    @ManyToMany(mappedBy = "appliedJobs")
    private Set<Employee> appliedEmployees = new HashSet<>();
    private String jobName;
    @ManyToOne
    @JoinColumn(name = "company_id",referencedColumnName = "id", nullable = false)
    private Company company;
    private String jobDescription;
    private EmploymentType employmentType;
    private ExpertiseLevel expertiseLevel;
    private LocalDate dateOfPost;
    /*@ElementCollection
    private List<String> techStack;*/
    private Boolean isRemote;
    private Boolean isSalaryDisclosed;
    private Integer salaryMax;
    private Integer salaryMin;
    @Transient
    private String timeInfo;
    @Transient
    private String salaryInfo;

    public void removeAllEmployees(){
        appliedEmployees.clear();
    }
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getJobName() {
        return jobName;
    }

    public void setJobName(String jobName) {
        this.jobName = jobName;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }

    public EmploymentType getEmploymentType() {
        return employmentType;
    }

    public void setEmploymentType(EmploymentType employmentType) {
        this.employmentType = employmentType;
    }

    public ExpertiseLevel getExpertiseLevel() {
        return expertiseLevel;
    }

    public void setExpertiseLevel(ExpertiseLevel expertiseLevel) {
        this.expertiseLevel = expertiseLevel;
    }

    public LocalDate getDateOfPost() {
        return dateOfPost;
    }

    public void setDateOfPost(LocalDate dateOfPost) {
        this.dateOfPost = dateOfPost;
    }

    /*public List<String> getTechStack() {
        return techStack;
    }

    public void setTechStack(List<String> techStack) {
        this.techStack = techStack;
    }*/

    public Boolean getRemote() {
        return isRemote;
    }

    public void setRemote(Boolean remote) {
        isRemote = remote;
    }

    public Boolean getSalaryDisclosed() {
        return isSalaryDisclosed;
    }

    public void setSalaryDisclosed(Boolean salaryDisclosed) {
        isSalaryDisclosed = salaryDisclosed;
    }

    public Integer getSalaryMax() {
        return salaryMax;
    }

    public void setSalaryMax(Integer salaryMax) {
        this.salaryMax = salaryMax;
    }

    public Integer getSalaryMin() {
        return salaryMin;
    }

    public void setSalaryMin(Integer salaryMin) {
        this.salaryMin = salaryMin;
    }

    public String getTimeInfo() {
        Period period = Period.between(dateOfPost,LocalDate.now());
        if(period.getDays() < 7){
            return "New";
        }
        if(period.getMonths() < 1){
            return period.getDays()/7 + " weeks ago";
        }
        if(period.getYears() < 1){
            return period.getMonths() + " months ago";
        }

        return period.getYears() + " years ago";
    }

    public void setTimeInfo(String timeInfo) {
        this.timeInfo = timeInfo;
    }

    public String getSalaryInfo() {
        if(!isSalaryDisclosed){
            return "Undisclosed Salary";
        }

        return salaryMin + " - " + salaryMax;
    }

    public void setSalaryInfo(String salaryInfo) {
        this.salaryInfo = salaryInfo;
    }


}
