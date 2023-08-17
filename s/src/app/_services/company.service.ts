import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { TokenStorageService } from "./token-storage.service";

@Injectable({
    providedIn: 'root'
})
export class CompanyService {
    private baseUrl = 'http://fatihdemir.com:8080'; // Base URL for your API
    private authToken = this.token.getToken(); // Replace with your actual token

    constructor(private http: HttpClient, private token: TokenStorageService) {}

    getCompanies(): Observable<any[]> {
        const url = `${this.baseUrl}/companies`;
        const headers = this.setupHeaders();

        return this.http.get<any[]>(url, { headers }).pipe(
            tap(data => console.log('Received data:', data)),
            catchError(error => {
                console.error('Error fetching companies:', error);
                throw error;
            })
        );
    }

    addCompany(newCompany: any): Observable<any> {
        const url = `${this.baseUrl}/companies`;
        const headers = this.setupHeaders();

        return this.http.post(url, newCompany, { headers }).pipe(
            tap(response => console.log('Added company:', response)),
            catchError(error => {
                console.error('Error adding company:', error);
                throw error;
            })
        );
    }

    private setupHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Authorization': `Bearer ${this.authToken}`
        });
    }
}
