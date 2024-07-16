import {Component, OnInit, ViewChild} from '@angular/core';
import { UserListService } from './user-list.service';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {Role, UserList} from "../../model/response.interface";
import {MatDialog} from "@angular/material/dialog";
import { flatMap } from 'rxjs/operators';
import {of} from "rxjs";
import {Router} from "@angular/router";
import { ConfirmationDialogComponent } from '../companies/confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  users: UserList[] = [];
    public pageSize: number = 5;
    public currentPage: number = 1;
    public pagedUsers: UserList[] = [];
    public totalItems: number = 0;
    roles:Role[]=[];
    public pagedRoles:Role[]=[];
  constructor(private userListService: UserListService, private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {

    this.fetchUsers();
  }

    fetchUsers(): void {
        this.userListService.getUsers(this.currentPage, this.pageSize).subscribe(
            response => {
                this.users = response.content; // Use response.content to get the array of companies
                this.totalItems = response.totalElements;
                //this.updatePagedCompanies();
                this.pagedUsers = this.users;
                this.pagedRoles=this.roles;
            },
            error => {
                console.error('Error fetching Users:', error);
            }
        );
    }
    // editUsers(id: number): void {
    //     this.router.navigate(['update-company', id]);
    // }



    onPageChange(event: PageEvent): void {
        this.currentPage = event.pageIndex + 1; // Angular Material uses 0-based index
        console.log("girdimmmmmmmmmmmmmmmmmmmmmmmmmmm");
        console.log(this.currentPage);
        console.log("girdimmmmmmmmmmmmmmmmmmmmmmmmmmm");
        this.pageSize = event.pageSize;
        this.fetchUsers();
    }


    openConfirmationDialog(index: number): void {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            width: '300px',
            data: 'Are you sure you want to remove this User?',
        });


        dialogRef.afterClosed().pipe(
            flatMap(result => {
                if (result === true) {
                    this.removeUsers(index);
                }
                return of(null); // Return a placeholder observable
            })
        ).subscribe(() => {
            // Additional logic or actions after company removal
        });
    }
    removeUsers(index: number): void {
        if (index >= 0 && index < this.users.length) {
            const userToRemove = this.users[index];
            this.userListService.removeUsers(userToRemove.id).subscribe(() => {
                this.totalItems -= 1;
                this.fetchUsers();
            });
        }
    }
}
