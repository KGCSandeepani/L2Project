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

  constructor(private readTempCompanyService: CompanySignupService,private data: DataPassService,private route : ActivatedRoute,private readcompanyService : AdminViewCompanyService,private readstuentService: ReadUnamePswServiceService,private router : Router,private ngxNotificationService: NgxNotificationService, private logStudent : LoggingStudentService) { }

  ngOnInit() { 
    sessionStorage.clear();    
    this.readstuentService.getData()
    .subscribe(data => this.students = data);

    this.readcompanyService.getData()
    .subscribe(data => this.companies = data);

    this.readTempCompanyService.getData()
    .subscribe(data => this.tempCompany = data);
  }

  adminLogin(uname,psw){
    if (uname=='admin' && psw=='admin'){
      this.newMessage("Admin");
      this.router.navigate(['/adminHomePage']);
      location.reload();
    }else{
      this.sendNotification();
    }
    
    for (let index = 0; index < this.tempCompany.length; index++) {
      const temp = this.tempCompany[index];
      if (uname==temp.name && psw==temp.password){
        this.router.navigate(['/companySignupSuccess']);
      }
    } 

    for (let index = 0; index < this.students.length; index++) {
      const student = this.students[index];
      if (uname==student.name && psw==student.password){
        this.newMessage(student.name+"");
        this.router.navigate(['/student']);
        location.reload();
      }
    } 
/*
    this.logStudent.getData(uname)
    .subscribe(data => {
      this.logstudent=data;
      if (uname==this.logstudent.name && psw==this.logstudent.password){
        this.newMessage(this.logstudent.name+"");
        this.router.navigate(['/student']);
        location.reload();
      }
    });
*/
    for (let index = 0; index < this.companies.length; index++) {
      const company = this.companies[index];
      if (uname==company.name && psw==company.password){
        this.newMessage(company.name+"");
        this.router.navigate(['/companyProfile/home']);
        location.reload();
      }
    }
    
  }

  signup(){
    //this.newMessage("Company");
    //location.reload();
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

}
