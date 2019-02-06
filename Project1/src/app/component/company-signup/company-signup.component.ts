import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { company } from '../Model/Company';
//import { CompanySignupService } from '../Services/company-signup.service';
import { CompanyAddDataService } from '../Services/company-add-data.service';
//import { CompanySignupService } from 'src/app/component/Services/company-signup.service';
import { AdminAcceptTempCompanyService } from 'src/app/component/Services/admin-accept-temp-company.service';
//import { RequestedCompanyComponent } from 'src/app/component/requested-company/requested-company.component';
import { CountNumberReqCompanyService } from 'src/app/component/Services/count-number-req-company.service';
import { GetNoOfCompanyService } from 'src/app/component/Services/get-no-of-company.service';
import { AdminViewCompanyService } from '../Services/admin-view-company.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxNotificationService } from 'ngx-notification';
// import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-company-signup',
  templateUrl: './company-signup.component.html',
  styleUrls: ['./company-signup.component.css']
})
export class CompanySignupComponent implements OnInit {

  acceptedCompanies:company[];
  company:company[]; 
  count:number=0;
  password;
  constructor(private ngxNotificationService: NgxNotificationService, private readcompanyService : AdminViewCompanyService,private readService: AdminAcceptTempCompanyService,private get:GetNoOfCompanyService,private companyadddataservice: CompanyAddDataService,private setCount:CountNumberReqCompanyService,private router :Router) { }
  
  ngOnInit() {
    this.readcompanyService.getData()
    .subscribe(data => this.acceptedCompanies = data);
  }

  onSubmit(formdata:NgForm){
  
    for (let index = 0; index < this.acceptedCompanies.length; index++) {
      const comp = this.acceptedCompanies[index];
      if (formdata.value.cname==comp.name && formdata.value.psw==comp.password){       
        formdata.reset();
        this.sendNotification();
        return;
      }
    }
    
   if(formdata.value.psw.length<8){
    this.password='';
    this.sendNotification1();
    return;
   }

   if(formdata.value.cname==null || formdata.value.cpname==null || formdata.value.location==null || formdata.value.contactno==null || formdata.value.email==null || formdata.value.psw==null){
    this.sendNotification2();
    return;
   }

    this. companyadddataservice.getCompanyData(formdata)
    .subscribe((data : company[] )=> {
        this.company = data;
        formdata.reset(); 
        this.router.navigate(['companySignupSuccess']); 
        this.incrementCount();  
    });
  }


  incrementCount() {
    this.count++;
    console.log(this.count+"badge count in compny sign up");
    this.setCount.getDetails(this.count);
  
  }

  sendNotification() {
    this.ngxNotificationService.sendMessage('Please enter different username or password', 'danger', 'bottom-right');
    //dark, light, success, info, warning, danger and none
    //top-left, top-right, bottom-left, bottom-right and center
  }

  sendNotification1() {
    this.ngxNotificationService.sendMessage('Please enter more than or equal eight characters', 'danger', 'bottom-right');
    //dark, light, success, info, warning, danger and none
    //top-left, top-right, bottom-left, bottom-right and center
  }

  sendNotification2() {
    this.ngxNotificationService.sendMessage('Please fill all the field', 'danger', 'bottom-right');
    //dark, light, success, info, warning, danger and none
    //top-left, top-right, bottom-left, bottom-right and center
  }

  // email = new FormControl('', [Validators.required, Validators.email]);
  // getErrorMessage() {
  //   return this.email.hasError('required') ? 'You must enter a value' :
  //       this.email.hasError('email') ? 'Not a valid email' :
  //           '';
  // }
}

