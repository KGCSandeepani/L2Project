import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { student } from '../Model/Student';
import { company } from '../Model/Company';
import { ReadUnamePswServiceService } from '../Services/read-uname-psw-service.service';
import { AdminViewCompanyService } from '../Services/admin-view-company.service';
import { DataPassService } from '../Services/data-pass.service';
import { LoggingStudentService } from '../Services/logging-student.service';
//import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { NgxNotificationService } from 'ngx-notification';
import { CompanySignupService } from 'src/app/component/Services/company-signup.service';
import { GetOneCompanyService } from 'src/app/component/Services/get-one-company.service';
import { GetOneTempCompanyService } from 'src/app/component/Services/get-one-temp-company.service';
import { staff } from 'src/app/component/Model/Staff';
import { AddAdminService } from 'src/app/component/Services/add-admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  students: student[];
  companies : company[];
  tempCompany : company[];
  logstudent :student;
  logCompany : company;
  logTempCompany : company;
  admin :staff;

  constructor(private getTempCompany : GetOneTempCompanyService, private getCompany : GetOneCompanyService, private data: DataPassService,private router : Router,private ngxNotificationService: NgxNotificationService, private logStudent : LoggingStudentService, private adminService : AddAdminService) { }

  ngOnInit() { 
    sessionStorage.clear();    
  //  this.readstuentService.getData()
  //  .subscribe(data => this.students = data);

  //  this.readcompanyService.getData()
  //  .subscribe(data => this.companies = data);

  //  this.readTempCompanyService.getData()
  //  .subscribe(data => this.tempCompany = data);

    this.adminService.getSupervisorData('admin','admin','admin','admin@gmail.com','0110000000')
    .subscribe((data : staff )=> {
        this.admin = data; 
    });
  }

  adminLogin(uname,psw){

    if(uname=='' || psw==''){
      this.sendNotification1();
      
    }

    if (uname=='admin' && psw=='admin'){
      this.newMessage("Admin");
      this.router.navigate(['/adminHomePage/adminDashboard']);      
    }
/*    
    for (let index = 0; index < this.tempCompany.length; index++) {
      const temp = this.tempCompany[index];
      if (uname==temp.name && psw==temp.password){
        this.router.navigate(['/companySignupSuccess']);
      }
    } */

    this.getTempCompany.getData(uname)
    .subscribe(
      data => {
        this.logTempCompany=data;
        if(this.logTempCompany!=null){
          if (uname==this.logTempCompany.name && psw==this.logTempCompany.password){
            this.router.navigate(['/companySignupSuccess']);
          }
        }
      }
    )

/*
    for (let index = 0; index < this.students.length; index++) {
      const student = this.students[index];
      if (uname==student.name && psw==student.password){
        this.newMessage(student.name+"");
        this.router.navigate(['/student']);
        //location.reload();
      }
    } */


    this.logStudent.getData(uname)
    .subscribe(data => {
      this.logstudent=data;
      if(this.logstudent!=null){
        if (uname==this.logstudent.name && psw==this.logstudent.password){
          this.newMessage(this.logstudent.name+"");
          this.router.navigate(['/student']);
        }
      }     
    });
/*
    for (let index = 0; index < this.companies.length; index++) {
      const company = this.companies[index];
      if (uname==company.name && psw==company.password){
        this.newMessage(company.name+"");
        this.router.navigate(['/companyProfile/home']);
        //location.reload();
      }
    }*/

    this.getCompany.getData(uname)
    .subscribe(
      data => {
        this.logCompany = data;
        if(this.logCompany!=null){
          if (uname==this.logCompany.name && psw==this.logCompany.password){
            this.newMessage(this.logCompany.name+"");
            this.router.navigate(['/companyProfile/home']);
          }
        }else{
          this.sendNotification();
        }
      }
    )
    
  }

  signup(){
    this.router.navigate(['/companySignup']);
    
  }

  newMessage(logger:string) {
    this.data.changeMessage(logger);
  }

  sendNotification() {
    this.ngxNotificationService.sendMessage('Wrong username or password', 'dark', 'bottom-right');
    //dark, light, success, info, warning, danger and none
    //top-left, top-right, bottom-left, bottom-right and center
  }

  sendNotification1() {
    this.ngxNotificationService.sendMessage('Please enter username and password', 'dark', 'bottom-right');
  }

}
