import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { TokenStorageService } from "../../_services/token-storage.service";
import {environment} from "../../../environments/environment";
import {Company, PageDto} from "../../model/response.interface";

@Injectable({
    providedIn: 'root'
})
export class CompanyService {
    private baseUrl = environment.domain; // Base URL for your API
    private authToken = this.token.getToken(); // Replace with your actual token

    constructor(private http: HttpClient, private token: TokenStorageService) {}

    getCompanies(page: number, pageSize: number): Observable<PageDto<Company>> {
        const url = `${this.baseUrl}/companies`;
        const headers = this.setupHeaders();
        page = page - 1;
        // Construct the query parameters for pagination
        const params = new HttpParams()
            .set('page', page.toString())
            .set('size', pageSize.toString());

        return this.http.get<PageDto<Company>>(url, { headers, params }).pipe(
            tap(data => console.log('Received data:', data)),
            catchError(error => {
                console.error('Error fetching companies:', error);
                throw error;
            })
        );
    }
    getCompanyById(id: number): Observable<Company> {
        const url = `${this.baseUrl}/companies/${id}`;
        const headers = this.setupHeaders();

        return this.http.get<Company>(url, { headers }).pipe(
            tap(data => console.log('Received company data:', data)),
            catchError(error => {
                console.error('Error fetching company:', error);
                throw error;
            })
        );
    }

    removeCompany(id: number): Observable<any> {
        const url = `${this.baseUrl}/companies/${id}`;
        const headers = this.setupHeaders(); // Include the Bearer token in the headers
        return this.http.delete(url, { headers });
    }
    editCompany(id: number, companyName: string, companyLocation: string, companyLogoPath: string, companySize: number): Observable<any> {
        const url = `${this.baseUrl}/companies/${id}`;
        const headers = this.setupHeaders();
        const updatedCompanyData = {
            companyName,
            companyLocation,
            companyLogoPath,
            companySize
        };
        console.log("evetttttttttt");
        console.log(updatedCompanyData);
        return this.http.put(url, updatedCompanyData, { headers }).pipe(
            catchError(error => {
                console.error('Error updating company:', error);
                throw error; // Rethrow the error to be caught by the calling code
            })
        );
    }



    addCompany(newCompany: Company): Observable<Company> {
        const url = `${this.baseUrl}/companies`;
        const headers = this.setupHeadersadd();
        return this.http.post<Company>(url, newCompany, { headers }).pipe(
            catchError(error => {
                console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
                console.error('Error adding company:', error);
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
