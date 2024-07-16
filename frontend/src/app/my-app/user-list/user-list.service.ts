import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, Observable, tap } from 'rxjs';
import { TokenStorageService } from "../../_services/token-storage.service";
import {environment} from "../../../environments/environment";
import {UserList, PageDto} from "../../model/response.interface";

@Injectable({
    providedIn: 'root'
})
export class UserListService {
    private baseUrl = environment.domain; // Base URL for your API
    private authToken = this.token.getToken(); // Replace with your actual token

    constructor(private http: HttpClient, private token: TokenStorageService) {}

    getUsers(page: number, pageSize: number): Observable<PageDto<UserList>> {
        const url = `${this.baseUrl}/users`;
        const headers = this.setupHeaders();
        page = page - 1;
        // Construct the query parameters for pagination
        const params = new HttpParams()
            .set('page', page.toString())
            .set('size', pageSize.toString());

        return this.http.get<PageDto<UserList>>(url, { headers, params }).pipe(
            tap(data => console.log('Received data:', data)),
            catchError(error => {
                console.error('Error fetching Users:', error);
                throw error;
            })
        );
    }
    getUserById(id: number): Observable<UserList> {
        const url = `${this.baseUrl}/users/${id}`;
        const headers = this.setupHeaders();

        return this.http.get<UserList>(url, { headers }).pipe(
            tap(data => console.log('Received user data:', data)),
            catchError(error => {
                console.error('Error fetching user:', error);
                throw error;
            })
        );
    }

    removeUsers(id: number): Observable<any> {
        const url = `${this.baseUrl}/users/${id}`;
        const headers = this.setupHeaders(); // Include the Bearer token in the headers
        return this.http.delete(url, { headers });
    }
    editUserRoles(id: number,role:string): Observable<any> {
        const url = `${this.baseUrl}/users/roles/${id}`;
        const headers = this.setupHeaders();
        const updatedUserData = {
           role
        };
        console.log("evetttttttttt");
        console.log(updatedUserData);
        return this.http.put(url, updatedUserData, { headers }).pipe(
            catchError(error => {
                console.error('Error updating Users:', error);
                throw error; // Rethrow the error to be caught by the calling code
            })
        );
    }

    private setupHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Authorization': `Bearer ${this.authToken}`
        });
    }


}
