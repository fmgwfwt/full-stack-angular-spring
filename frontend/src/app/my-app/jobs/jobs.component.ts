import {Component, OnInit, ViewChild} from '@angular/core';
import { JobsService } from './jobs.service';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {Jobs} from "../../model/response.interface";
// import {ConfirmationDialogComponent} from "./confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import { flatMap } from 'rxjs/operators';
import {of} from "rxjs";
import {Router} from "@angular/router";
import { ConfirmationDialogComponent } from '../companies/confirmation-dialog/confirmation-dialog.component';



@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  jobs: Jobs[] = [];
    public pageSize: number = 5;
    public currentPage: number = 1;
    public pagedJobs: Jobs[] = [];
    public totalItems: number = 0;

    ngOnInit(): void {
     console.log('JobsComponent initialized');
      this.fetchJobs();
    }

    constructor(private jobsService: JobsService, private dialog: MatDialog, private router: Router) {}

    fetchJobs(): void {
      this.jobsService.getJobs(this.currentPage, this.pageSize).subscribe(
          response => {
              this.jobs = response as any; // Use response.content to get the array of companies
              this.totalItems = response.totalElements;
              //this.updatePagedCompanies();
              this.pagedJobs = this.jobs;
          },
          error => {
              console.error('Error fetching jobs:', error);
          }
      );
  }
  addJobs(): void {
    this.router.navigate(['add-jobs']);
}
editJobs(id: number): void {
  this.router.navigate(['update-jobs', id]);
}



  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1; // Angular Material uses 0-based index
    console.log("girdimmmmmmmmmmmmmmmmmmmmmmmmmmm");
    console.log(this.currentPage);
    console.log("girdimmmmmmmmmmmmmmmmmmmmmmmmmmm");
    this.pageSize = event.pageSize;
    this.fetchJobs();
}

openConfirmationDialog(index: number): void {
  const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      data: 'Are you sure you want to remove this Job?',
  });


  dialogRef.afterClosed().pipe(
      flatMap(result => {
          if (result === true) {
              this.removeJobs(index);
          }
          return of(null); // Return a placeholder observable
      })
  ).subscribe(() => {
      // Additional logic or actions after company removal
  });
}

removeJobs(index: number): void {
  if (index >= 0 && index < this.jobs.length) {
      const companyToRemove = this.jobs[index];
      this.jobsService.removeJobs(companyToRemove.id).subscribe(() => {
          this.totalItems -= 1;
          this.fetchJobs();
      });
  }
}

}
