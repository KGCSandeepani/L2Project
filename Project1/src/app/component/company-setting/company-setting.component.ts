import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../Services/data-pass.service';
import { Router } from '@angular/router';
import { NgxNotificationService } from 'ngx-notification';
import { CompanyUpdatePasswordService } from '../Services/company-update-password.service';
import { CompanyUpdateInternshipService } from '../Services/company-update-internship.service';

@Component({
  selector: 'app-company-setting',
  templateUrl: './company-setting.component.html',
  styleUrls: ['./company-setting.component.css']
})
export class CompanySettingComponent implements OnInit {

  loger: string ;
  message : string;
  doInternship = "true";

  constructor(private ngxNotificationService: NgxNotificationService,private data : DataPassService,private router : Router, 
    private changePasswordService :CompanyUpdatePasswordService, private updateInternship : CompanyUpdateInternshipService) { }

  ngOnInit() {
    this.loger = this.data.getMessage();
  }

  changePassword(password :String,password1 : String){
    if (password==password1) {
      if(password.length>=8){
        this.changePasswordService.updateCompanyData(this.loger,password)
        .subscribe(data =>{
          this.sendNotification();
        });
      } else {
        this.sendNotification1();
      }
      
    } else {
      this.sendNotification4();
    }
  }

  onChange(event : any){
    this.doInternship = event.target.value;

    if(this.doInternship=="true"){
      this.updateInternship.updateCompanyInternshipData(this.loger,true)
      .subscribe(res=>{
        this.sendNotification2();
      },error => {
        this.sendNotification3();
      });
    }

    else{
      this.updateInternship.updateCompanyInternshipData(this.loger,false)
      .subscribe(res=>{
        this.sendNotification2();
      },error => {
        this.sendNotification3();
      });
    }  

  }

  sendNotification() {
    this.ngxNotificationService.sendMessage('Successful change password', 'success', 'bottom-right');
    //dark, light, success, info, warning, danger and none
    //top-left, top-right, bottom-left, bottom-right and center
  }

  sendNotification1() {
    this.ngxNotificationService.sendMessage('Please enter more than or equal 8 characters', 'danger', 'bottom-right');
  }

  sendNotification2() {
    this.ngxNotificationService.sendMessage('Added Successfull', 'success', 'bottom-right');
  }

  sendNotification3() {
    this.ngxNotificationService.sendMessage('Added Fail. Try Again', 'success', 'bottom-right');
  }

  sendNotification4() {
    this.ngxNotificationService.sendMessage('Not equal new password & confirmed password', 'success', 'bottom-right');
  }

}
