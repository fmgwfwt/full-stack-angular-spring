import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobsService } from '../jobs.service';
import { Jobs ,Company} from '../../../model/response.interface';


@Component({
    selector: 'app-update-jobs',
    templateUrl: './add-jobs.component.html',
    styleUrls: ['./add-jobs.component.css']

    
})
export class AddJobsComponent implements OnInit {

  constructor(private router: Router, private jobsService: JobsService) {}

  // Define the variables according to the Jobs interface
  dateOfPost: Date = new Date();
  employmentType: number = 0;
  expertiseLevel: number = 0;
  isRemote: boolean = false;
  isSalaryDisclosed: boolean = false;
  jobDescription: string = '';
  jobName: string = '';
  salaryInfo: string = '';
  salaryMax: number = 0;
  salaryMin: number = 0;
  timeInfo: string = '';
  companyId:number=0;
  ngOnInit(): void {}

  addJobs() {
    const newJob: Jobs = {
      id: 0,
      dateOfPost: this.dateOfPost,
      employmentType: this.employmentType,
      expertiseLevel: this.expertiseLevel,
      isRemote: this.isRemote,
      isSalaryDisclosed: this.isSalaryDisclosed,
      jobDescription: this.jobDescription,
      jobName: this.jobName,
      salaryInfo: this.salaryInfo,
      salaryMax: this.salaryMax,
      salaryMin: this.salaryMin,
      timeInfo: this.timeInfo,
      

    }

    const companyId:Company={
      id: this.companyId,
      companyName: '',
      companyLocation: '',
      companyLogoPath: '',
      companySize: 0
    };
 
    this.jobsService.addJobs(newJob,companyId.id).subscribe(
      (response) => {
        console.log('Job added successfully', response);
        this.router.navigate(['/jobs']);
      },
      (error) => {

        
        console.error('Error adding job', error);
      }
    );
  }



}
