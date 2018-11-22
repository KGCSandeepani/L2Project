import { Component, OnInit } from '@angular/core';
import { company } from 'src/app/component/Model/Company';
import { CompanySignupService } from 'src/app/component/Services/company-signup.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requested-company',
  templateUrl: './requested-company.component.html',
  styleUrls: ['./requested-company.component.css']
})
export class RequestedCompanyComponent implements OnInit {
  [x: string]: any;

  company: company[];

  constructor(private readService: CompanySignupService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.readService.getData()
    .subscribe(data => this.company = data);
    console.log(this.company);
  }

}



