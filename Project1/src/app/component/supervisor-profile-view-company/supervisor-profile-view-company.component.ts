import { Component, OnInit } from '@angular/core';
import { AdminAcceptTempCompanyService } from 'src/app/component/Services/admin-accept-temp-company.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { company } from 'src/app/component/Model/Company';
import { CompanySignupService } from 'src/app/component/Services/company-signup.service';
import { NgForm } from '@angular/forms';
import { SupervisorViewCompanyServiceService } from 'src/app/component/Services/supervisor-view-company-service.service';

@Component({
  selector: 'app-supervisor-profile-view-company',
  templateUrl: './supervisor-profile-view-company.component.html',
  styleUrls: ['./supervisor-profile-view-company.component.css']
})
export class SupervisorProfileViewCompanyComponent implements OnInit {
  [x: string]: any;
  company: company[];

  constructor(private readService: SupervisorViewCompanyServiceService,private accept: AdminAcceptTempCompanyService,route : ActivatedRoute,private router : Router) { }

  ngOnInit() {
    
    this.readService.getData()
    .subscribe(data => this.company = data);
    console.log(this.company);


  }

}
