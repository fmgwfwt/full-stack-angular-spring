import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ActivatedRoute } from '@angular/router';
import {Jobs} from "../../../model/response.interface";
import { JobsService } from '../jobs.service';


@Component({
  selector: 'app-update-jobs',
  templateUrl: './update-jobs.component.html',
  styleUrls: ['./update-jobs.component.css']
})
export class UpdateJobsComponent {
  dateOfPost: Date;
  employmentType: number;
  expertiseLevel: number;
  isRemote: any;
  isSalaryDisclosed: boolean;
  jobDescription: string;
  jobName: string;
  salaryInfo: string;
  salaryMax: number;
  salaryMin: number;
  timeInfo: string;

  constructor(private router: Router, private jobsService: JobsService, private route: ActivatedRoute) {}
  id: number = +this.route.snapshot.paramMap.get('id');
  name: string = '';
  location: string = '';
  logo: string = '';
  size: number = 0;
  ngOnInit(): void {
    this.jobsService.getJobById(this.id).subscribe(
        (jobs: Jobs) => {
            this.dateOfPost = jobs.dateOfPost;
            this.employmentType = jobs.employmentType;
            this.expertiseLevel = jobs.expertiseLevel;
            this.isRemote = jobs.isRemote;
            this.isSalaryDisclosed = jobs.isSalaryDisclosed;
            this.jobDescription = jobs.jobDescription;
            this.jobName = jobs.jobName;
            this.salaryInfo = jobs.salaryInfo;
            this.salaryMax = jobs.salaryMax;
            this.salaryMin = jobs.salaryMin;
            this.timeInfo = jobs.timeInfo;
        },
        error => {
          console.error('Error fetching jobs details:', error);
        }
    );
  }

  updateJobs() {
    // Get the updated jobs data from your form inputs
    this.jobsService.editJobs(
        this.id,
        this.dateOfPost,
        this.employmentType,
        this.expertiseLevel,
        this.isRemote,
        this.isSalaryDisclosed,
        this.jobDescription,
        this.jobName,
        this.salaryInfo,
        this.salaryMax,
        this.salaryMin ,
        this.timeInfo


    ).subscribe(
        () => {
          // Success callback
          console.log('Jobs updated successfully');
          console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
          console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
          console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
          console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
          console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
          this.router.navigate(['/jobs']);
        },
        error => {
          // Error callback
          console.error('Error updating jobs:', error);
        }
    );
  }

}
