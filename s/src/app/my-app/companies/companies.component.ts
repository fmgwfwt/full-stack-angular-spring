import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../_services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: any[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.fetchCompanies();
  }

  fetchCompanies(): void {
    this.companyService.getCompanies().subscribe(
        response => {
          this.companies = response;
        },
        error => {
          console.error('Error fetching companies:', error);
        }
    );
  }
    addCompany(newCompany: any): void {
        this.companyService.addCompany(newCompany).subscribe(
            response => {
                // If successful, fetch the updated list of companies
                this.fetchCompanies();
            },
            error => {
                console.error('Error adding company:', error);
                // Handle error cases appropriately
            }
        );
    }
  editCompany(company: any): void {
    // Implement the logic to handle editing the company
    console.log('Editing company:', company);
  }

  deleteCompany(companyId: number): void {
    // Implement the logic to handle deleting the company
    console.log('Deleting company with ID:', companyId);
  }
}
