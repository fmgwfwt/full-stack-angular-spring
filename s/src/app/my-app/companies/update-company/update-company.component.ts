import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {any} from "codelyzer/util/function";
import {CompanyService} from "../company.service";
import { ActivatedRoute } from '@angular/router';
import {Company} from "../../../model/response.interface";


@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent {

  constructor(private router: Router, private companyService: CompanyService, private route: ActivatedRoute) {}
  id: number = +this.route.snapshot.paramMap.get('id');
  name: string = '';
  location: string = '';
  logo: string = '';
  size: number = 0;
  ngOnInit(): void {
    this.companyService.getCompanyById(this.id).subscribe(
        (company: Company) => {
          this.name = company.companyName;
          this.location = company.companyLocation;
          this.logo = company.companyLogoPath;
          this.size = company.companySize;
        },
        error => {
          console.error('Error fetching company details:', error);
        }
    );
  }

  updateCompany() {
    // Get the updated company data from your form inputs
    this.companyService.editCompany(
        this.id,
        this.name,
        this.location,
        this.logo,
        this.size
    ).subscribe(
        () => {
          // Success callback
          console.log('Company updated successfully');
          console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
          console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
          console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
          console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
          console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
          this.router.navigate(['/companies']);
        },
        error => {
          // Error callback
          console.error('Error updating company:', error);
        }
    );
  }

}
