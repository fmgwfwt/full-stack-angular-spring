package com.example.project.domain.job;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class JobController {
    private final JobService jobService;
    @Autowired
    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @GetMapping("/jobs")
    public ResponseEntity<List<Job>> getAllJobs(){
        List<Job> jobList = jobService.getAllJobs();
        return ResponseEntity.ok(jobList);
    }

    @GetMapping("/jobs/{jobId}")
    public ResponseEntity<Job> getJob(@PathVariable("jobId") Integer jobId){
        //check the errors: job does not exist etc.
        Job job = jobService.findJobById(jobId).get();
        return ResponseEntity.ok(job);
    }

    @DeleteMapping("/jobs/{jobId}")
    public ResponseEntity<Void> deleteCompany(@PathVariable Integer jobId) {
        if (jobService.deleteJob(jobId)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/companies/{companyId}/jobs")
    public ResponseEntity<Job> createJob(
            @PathVariable Integer companyId,
            @RequestBody Job newJob) {
        // Perform any necessary validation or business logic before saving
        // For example, check if the newJob has all the required fields, etc.

        // Save the new company in the database
        Job savedJob = jobService.createJob(companyId, newJob);

        return ResponseEntity.ok(savedJob);
    }

    @PutMapping("/jobs/{jobId}")
    public ResponseEntity<Job> updateJob(
            @PathVariable Integer jobId,
            @RequestBody Job updatedJob
    ) {
        // Retrieve the existing company from the database
        Job existingJob = jobService.getJobById(jobId);

        // Save the updated company in the database
        updatedJob = jobService.updateJob(jobId, updatedJob);

        return ResponseEntity.ok(updatedJob);
    }
}
