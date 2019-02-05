import { Component, OnInit } from '@angular/core';
import { AdminAcceptTempCompanyService } from 'src/app/component/Services/admin-accept-temp-company.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { company } from 'src/app/component/Model/Company';
import { CompanySignupService } from 'src/app/component/Services/company-signup.service';
import { NgForm } from '@angular/forms';
import { AdminViewCompanyService } from 'src/app/component/Services/admin-view-company.service';
import { EmailService } from 'src/app/component/Services/email.service';

export interface Email {
  // email: ''
  from: String,
  to: String,
  subject: String,
  message: String
};

@Component({
  selector: 'app-admin-view-company',
  templateUrl: './admin-view-company.component.html',
  styleUrls: ['./admin-view-company.component.css']
})
export class AdminViewCompanyComponent implements OnInit {
  [x: string]: any;
  company: company[];
  email1:Email[];
 

  serverErrorMessages;
  message = false;
  
  constructor(private readService: AdminViewCompanyService,private email:EmailService,private accept: AdminAcceptTempCompanyService,
  route : ActivatedRoute,private router : Router) { }

  ngOnInit() {
    
      this.readService.getData()
      .subscribe(data => this.company = data);
      console.log(this.company);
    
   
  }


  // onSubmit(formdata : NgForm){

  //   this.email.rstpw(formdata)
  //   .subscribe((data : Email[] )=> {
  //       this.email1 = data;
  //       formdata.reset();    
  //   });


  //   // this.service.rstpw(form.value).subscribe(
  //   //   res => {
  //   //     console.log(res);
  //   //     if(res['sucsess']==false){
  //   //       this.msg=res['message'];
  //   //       this.router.navigate(['newpassword']);
  //   //     }else{
  //   //       this.msg=res['message'];
  //   //     }
  //   //   },
  //   //   err => {
  //   //     console.log(err);
  //   //     this.msg='';
  //   //   }
  //   // );
   
    
  // }
}







