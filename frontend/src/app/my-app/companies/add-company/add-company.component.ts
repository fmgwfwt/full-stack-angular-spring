import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CompanyService} from "../company.service";
import {response} from "express";
import {Company} from "../../../model/response.interface";



@Component({
  selector: 'app-update-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent {

  constructor(private router: Router, private companyService: CompanyService) {}
  name: string = '';
  location: string = '';
  logo: string = '';
  size: number = 0;
  ngOnInit(): void {

  }


    addCompany() {
        const newCompany: Company = {
            id: 0,
            companyName: this.name,
            companyLocation: this.location,
            companyLogoPath: this.logo,
            companySize: this.size
        };
        this.companyService.addCompany(newCompany).subscribe(
            (response) =>{
                console.log("Company added successfully", response);
                this.router.navigate(['/companies']);
            },
            (error) => {
                console.error("Error adding company", error);
            }
        );
    }
}
