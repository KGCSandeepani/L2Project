import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { company } from '../Model/Company';
import { CompanySignupService } from '../Services/company-signup.service';

@Component({
  selector: 'app-company-signup',
  templateUrl: './company-signup.component.html',
  styleUrls: ['./company-signup.component.css']
})
export class CompanySignupComponent implements OnInit {

  company:company[];
  constructor(private companysignupservice: CompanySignupService) { }

  ngOnInit() {
  }

  onSubmit(formdata:NgForm){
    // console.log(formdata.value.s_text);
    /*this.companysignupservice.getCompanyData(formdata)
    .subscribe((data : company[] )=> {
        this.company = data;
        formdata.reset();    
    });*/
  }
}
