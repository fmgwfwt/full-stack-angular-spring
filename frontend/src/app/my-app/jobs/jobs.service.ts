import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { TokenStorageService } from "../../_services/token-storage.service";
import {environment} from "../../../environments/environment";
import {Jobs,Company, PageDto} from "../../model/response.interface";
@Injectable({
    providedIn: 'root'
})
export class JobsService {
    private baseUrl = environment.domain; // Base URL for your API
    private authToken = this.token.getToken(); // Replace with your actual token

    constructor(private http: HttpClient, private token: TokenStorageService) {}

    getJobs(page: number, pageSize: number): Observable<PageDto<Jobs>> {
        const url = `${this.baseUrl}/jobs`;
        const headers = this.setupHeaders();
        page = page - 1;
        // Construct the query parameters for pagination
        const params = new HttpParams()
            .set('page', page.toString())
            .set('size', pageSize.toString());

        return this.http.get<PageDto<Jobs>>(url, { headers, params }).pipe(
            tap(data => console.log('Received data:', data)),
            catchError(error => {
                console.error('Error fetching jobs:', error);
                throw error;
            })
        );
    }

    getJobById(id: number): Observable<Jobs> {
        const url = `${this.baseUrl}/jobs/${id}`;
        const headers = this.setupHeaders();

        return this.http.get<Jobs>(url, { headers }).pipe(
            tap(data => console.log('Received job data:', data)),
            catchError(error => {
                console.error('Error fetching jobs:', error);
                throw error;
            })
        );
    }

    removeJobs(id: number): Observable<any> {
        const url = `${this.baseUrl}/jobs/${id}`;
        const headers = this.setupHeaders(); // Include the Bearer token in the headers
        return this.http.delete(url, { headers });
    }
    editJobs(id: number, dateOfPost: Date, employmentType: number, expertiseLevel: number, isRemote: boolean, isSalaryDisclosed: boolean, jobDescription: string, jobName: string, salaryInfo: string, salaryMax: number, salaryMin: number, timeInfo: string): Observable<any> {
        const url = `${this.baseUrl}/jobs/${id}`;
        const headers = this.setupHeaders();
        const updatedJobsData = {
          id,
          dateOfPost,
          employmentType,
          expertiseLevel,
          isRemote,
          isSalaryDisclosed,
          jobDescription,
          jobName,
          salaryInfo,
          salaryMax,
          salaryMin,
          timeInfo
        };
        console.log("evetttttttttt");
        console.log(updatedJobsData);
        return this.http.put(url, updatedJobsData, { headers }).pipe(
            catchError(error => {
                console.error('Error updating jobs:', error);
                throw error; // Rethrow the error to be caught by the calling code
            })
        );
    }

    addJobs(newJob: Jobs,companyId:number): Observable<Jobs> {
        const url = `${this.baseUrl}/companies/${companyId}/jobs`;
        const headers = this.setupHeadersadd();
        return this.http.post<Jobs>(url, newJob, { headers }).pipe(
            catchError(error => {
                console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
                console.error('Error adding Jobs:', error);
                throw error;
            })
        );
    }



   private setupHeadersadd(): HttpHeaders {
        return new HttpHeaders({
            'Authorization': `Bearer ${this.authToken}`,
            'Content-Type': 'application/json' // Include the Content-Type header
        });
    }

    private setupHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Authorization': `Bearer ${this.authToken}`
        });
    }
    


}