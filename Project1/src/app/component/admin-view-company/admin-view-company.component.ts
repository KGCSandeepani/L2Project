import { Component, OnInit } from '@angular/core';
import { AdminAcceptTempCompanyService } from 'src/app/component/Services/admin-accept-temp-company.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { company } from 'src/app/component/Model/Company';
import { CompanySignupService } from 'src/app/component/Services/company-signup.service';
import { NgForm } from '@angular/forms';
import { AdminViewCompanyService } from 'src/app/component/Services/admin-view-company.service';
import { EmailService } from 'src/app/component/Services/email.service';
import { AdminDeleteCompanyService } from 'src/app/component/Services/admin-delete-company.service';
import { ConfirmationDialogServiceService } from 'src/app/component/confirmation-dialog-component/confirmation-dialog-service.service';

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
  private deleteService: AdminDeleteCompanyService,private confirmationDialogService: ConfirmationDialogServiceService,route : ActivatedRoute,private router : Router) { }

  ngOnInit() {
    
      this.readService.getData()
      .subscribe(data => this.company = data);
      console.log(this.company);
    
   
  }

  onReject(name:string, d:boolean){
    if(d==true){
      this.deleteService.deleteCompanyData(name).subscribe(result=>{
        console.log(result);
        this.ngOnInit();
      },error => console.log('There was an error: ', error))
    }
    
  }

  public openConfirmationDialog(name) {
    this.confirmationDialogService.confirm('Please confirm..', ' Do you really wish to delete '+name)
    .then((confirmed) => this.onReject(name,confirmed))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
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







