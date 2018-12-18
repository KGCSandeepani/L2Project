import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { student } from '../Model/Student';
import { company } from '../Model/Company';
import { ReadUnamePswServiceService } from '../Services/read-uname-psw-service.service';
import { AdminViewCompanyService } from '../Services/admin-view-company.service';
import { DataPassService } from '../Services/data-pass.service';
//import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { NgxNotificationService } from 'ngx-notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  students: student[];
  companies : company[];
  constructor(private data: DataPassService,private route : ActivatedRoute,private readcompanyService : AdminViewCompanyService,private readstuentService: ReadUnamePswServiceService,private router : Router,private ngxNotificationService: NgxNotificationService) { }

  ngOnInit() { 
    sessionStorage.clear();    
    this.readstuentService.getData()
    .subscribe(data => this.students = data);

    this.readcompanyService.getData()
    .subscribe(data => this.companies = data);
  }

  adminLogin(uname,psw){
    if (uname=='admin' && psw=='admin'){
      this.newMessage("Admin");
      this.router.navigate(['/adminHomePage']);
      location.reload();
    }else{
      this.sendNotification();
    }
    
    for (let index = 0; index < this.students.length; index++) {
      const student = this.students[index];
      if (uname==student.name && psw==student.password){
        this.newMessage(student.name+"");
        this.router.navigate(['/student']);
        location.reload();
      }
    }

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
    this.newMessage("Company");
    this.router.navigate(['/companySignup']);
    location.reload();
  }

  newMessage(logger:string) {
    this.data.changeMessage(logger);
  }

  sendNotification() {
  	this.ngxNotificationService.sendMessage('Wrong username or password', 'dark', 'bottom-right');
  }

}
