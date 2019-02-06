import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../Services/data-pass.service';
import { Router } from '@angular/router';
import { NgxNotificationService } from 'ngx-notification';
import { CompanyUpdatePasswordService } from '../Services/company-update-password.service';

@Component({
  selector: 'app-company-setting',
  templateUrl: './company-setting.component.html',
  styleUrls: ['./company-setting.component.css']
})
export class CompanySettingComponent implements OnInit {

  loger: string ;
  message : string;

  constructor(private ngxNotificationService: NgxNotificationService,private data : DataPassService,private router : Router, private changePasswordService :CompanyUpdatePasswordService) { }

  ngOnInit() {
    this.loger = this.data.getMessage();
  }

  changePassword(password :String,password1 : String){
    if (password==password1 && password.length==8) {
      this.changePasswordService.updateCompanyData(this.loger,password)
      .subscribe(data =>{
        this.sendNotification();
      });
    } else {
      this.sendNotification1();
    }
  }

  sendNotification() {
    this.ngxNotificationService.sendMessage('Successful change password', 'success', 'bottom-right');
    //dark, light, success, info, warning, danger and none
    //top-left, top-right, bottom-left, bottom-right and center
  }

  sendNotification1() {
    this.ngxNotificationService.sendMessage('Unable to change password', 'danger', 'bottom-right');
  }

}
