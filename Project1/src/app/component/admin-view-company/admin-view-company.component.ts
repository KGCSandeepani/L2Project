import { Component, OnInit } from '@angular/core';
import { AdminAcceptTempCompanyService } from 'src/app/component/Services/admin-accept-temp-company.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { company } from 'src/app/component/Model/Company';
import { CompanySignupService } from 'src/app/component/Services/company-signup.service';
import { NgForm } from '@angular/forms';
import { AdminViewCompanyService } from 'src/app/component/Services/admin-view-company.service';


@Component({
  selector: 'app-admin-view-company',
  templateUrl: './admin-view-company.component.html',
  styleUrls: ['./admin-view-company.component.css']
})
export class AdminViewCompanyComponent implements OnInit {
  [x: string]: any;
  company: company[];

  constructor(private readService: AdminViewCompanyService,private accept: AdminAcceptTempCompanyService,route : ActivatedRoute,private router : Router) { }

  ngOnInit() {
    
      this.readService.getData()
      .subscribe(data => this.company = data);
      console.log(this.company);
    
   
  }


}








