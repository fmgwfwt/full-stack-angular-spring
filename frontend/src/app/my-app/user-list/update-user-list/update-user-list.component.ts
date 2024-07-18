import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { any } from "codelyzer/util/function";

import { ActivatedRoute } from '@angular/router';
import { Role, UserList } from "../../../model/response.interface";
import { UserListService } from '../user-list.service';
import { response } from 'express';


@Component({
  selector: 'app-update-user-list',
  templateUrl: './update-user-list.component.html',
  styleUrls: ['./update-user-list.component.css']
})
export class UpdateUserListComponent {

  constructor(private router: Router, private userListService: UserListService, private route: ActivatedRoute) { }
  id: number = +this.route.snapshot.paramMap.get('id');

  username: string = '';
  email: string = '';
  selectedRoles: Array<String> = [];
  availableRoles: Role[] = [];
    public pageSize: number = 5;
    public currentPage: number = 1;
    public pagedRoles: Role[] = [];
    public totalItems: number = 0;
  ngOnInit(): void {
    this.userListService.getUserById(this.id).subscribe(
      (user: UserList) => {
        this.username = user.username;
        this.email = user.email;
        this.selectedRoles = user.roles;
      },
      error => {
        console.error('Error fetching user details:', error);
      }
    ),
    this.userListService.getAvailableRoles(this.currentPage,this.pageSize).subscribe(
      response => {
        this.availableRoles=response.content;
        this.totalItems=response.totalElements;
        this.pagedRoles=this.availableRoles;

      
  
      },
      error => {
        console.error('Error fetching user details:', error);
      }

    );

  }


  updateUser() {
    // Get the updated User data from your form inputs

    // if (!Array.isArray(this.selectedRoles)) {
    //   this.selectedRoles = [this.selectedRoles];
    // }
    this.userListService.editUser({
      id: this.id,
      username: this.username,
      email: this.email,
      roles: this.selectedRoles  


    }
    

    ).subscribe(
      () => {
        // Success callback
        console.log('User updated successfully');
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        this.router.navigate(['user-list']);
      },
      error => {
        // Error callback
        console.error('Error updating user:', error);
      }
    );
  }

}
