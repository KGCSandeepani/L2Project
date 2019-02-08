import { Component, OnInit } from '@angular/core';
import { StudentChangePasswordService } from '../Services/student-change-password.service';
import { DataPassService } from '../Services/data-pass.service';
import { Router } from '@angular/router';
import { NgxNotificationService } from 'ngx-notification';

@Component({
  selector: 'app-student-setting',
  templateUrl: './student-setting.component.html',
  styleUrls: ['./student-setting.component.css']
})
export class StudentSettingComponent implements OnInit {

  loger: string ;
  message : string;

  constructor(private ngxNotificationService: NgxNotificationService,private data : DataPassService,private router : Router, 
    private changePasswordService :StudentChangePasswordService) { }

  ngOnInit() {
    this.loger = this.data.getMessage();
  }

  changePassword(password :String,password1 : String){
    if (password==password1 ) {
      if(password.length>=8){
        this.changePasswordService.updateStudentData(this.loger,password)
        .subscribe(data =>{
          this.sendNotification();
        });
      } else {
        this.sendNotification1();
      }     
    } else {
      this.sendNotification2();
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
    this.ngxNotificationService.sendMessage('Not equal new password & confirmed password', 'danger', 'bottom-right');
  }

}
