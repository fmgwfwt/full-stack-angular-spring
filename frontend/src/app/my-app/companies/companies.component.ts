import {Component, OnInit, ViewChild} from '@angular/core';
import { CompanyService } from './company.service';
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {Company} from "../../model/response.interface";
import {ConfirmationDialogComponent} from "./confirmation-dialog/confirmation-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import { flatMap } from 'rxjs/operators';
import {of} from "rxjs";
import {Router} from "@angular/router";





@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
  companies: Company[] = [];
    public pageSize: number = 5;
    public currentPage: number = 1;
    public pagedCompanies: Company[] = [];
    public totalItems: number = 0;

  constructor(private companyService: CompanyService, private dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {

    this.fetchCompanies();
  }

    fetchCompanies(): void {
        this.companyService.getCompanies(this.currentPage, this.pageSize).subscribe(
            response => {
                this.companies = response.content; // Use response.content to get the array of companies
                this.totalItems = response.totalElements;
                //this.updatePagedCompanies();
                this.pagedCompanies = this.companies;
            },
            error => {
                console.error('Error fetching companies:', error);
            }
        );
    }
    editCompany(id: number): void {
        this.router.navigate(['update-company', id]);
    }


    addCompany(): void {
        this.router.navigate(['add-company']);
    }
/*    openAddCompanyDialog(): void {
        console.log("dialog açıldıııııııııııııııııııııııııııııııı");
        const dialogRef = this.dialog.open(AddCompanyDialogComponent, {
            width: '500px', // Set the dialog's width
        });
        console.log("dialog açıldıııııııııııııııııııııııııııııııı2");
        dialogRef.afterClosed().subscribe(newCompany => {
            if (newCompany) {
                console.log("dialog açıldıııııııııııııııııııııııııııııııı3");
                // Add the new company to the list or perform any other actions
                this.addCompany(newCompany);
            }
        });
        console.log("dialog açıldıııııııııııııııııııııııııııııııı4");
    }*/
/*    updatePagedCompanies(): void {
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        this.pagedCompanies = this.companies.slice(startIndex, endIndex);
    }*/


    onPageChange(event: PageEvent): void {
        this.currentPage = event.pageIndex + 1; // Angular Material uses 0-based index
        console.log("girdimmmmmmmmmmmmmmmmmmmmmmmmmmm");
        console.log(this.currentPage);
        console.log("girdimmmmmmmmmmmmmmmmmmmmmmmmmmm");
        this.pageSize = event.pageSize;
        this.fetchCompanies();
    }


    openConfirmationDialog(index: number): void {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            width: '300px',
            data: 'Are you sure you want to remove this company?',
        });


        dialogRef.afterClosed().pipe(
            flatMap(result => {
                if (result === true) {
                    this.removeCompany(index);
                }
                return of(null); // Return a placeholder observable
            })
        ).subscribe(() => {
            // Additional logic or actions after company removal
        });
    }
    removeCompany(index: number): void {
        if (index >= 0 && index < this.companies.length) {
            const companyToRemove = this.companies[index];
            this.companyService.removeCompany(companyToRemove.id).subscribe(() => {
                this.totalItems -= 1;
                this.fetchCompanies();
            });
        }
    }
}
