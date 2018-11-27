import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { company } from '../Model/Company';
//import { CompanySignupService } from '../Services/company-signup.service';
import { CompanyAddDataService } from '../Services/company-add-data.service';
import { CompanySignupService } from 'src/app/component/Services/company-signup.service';
import { AdminAcceptTempCompanyService } from 'src/app/component/Services/admin-accept-temp-company.service';
import { RequestedCompanyComponent } from 'src/app/component/requested-company/requested-company.component';


@Component({
  selector: 'app-company-signup',
  templateUrl: './company-signup.component.html',
  styleUrls: ['./company-signup.component.css']
})
export class CompanySignupComponent implements OnInit {

  company:company[];
  constructor(private readService: AdminAcceptTempCompanyService,private companyadddataservice: CompanyAddDataService) { }

  ngOnInit() {
  }

  onSubmit(formdata:NgForm){
    // console.log(formdata.value.s_text);
    this. companyadddataservice.getCompanyData(formdata)
    .subscribe((data : company[] )=> {
        this.company = data;
        formdata.reset();    
    });
  }



}

