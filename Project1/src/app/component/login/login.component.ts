import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { student } from '../Model/Student';
import { ReadUnamePswServiceService } from '../Services/read-uname-psw-service.service';
import { DataPassService } from '../Services/data-pass.service';
//import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  students: student[];
  constructor(private data: DataPassService,private route : ActivatedRoute,private readService: ReadUnamePswServiceService,private router : Router) { }

  ngOnInit() { 
    sessionStorage.clear();    
    this.readService.getData()
    .subscribe(data => this.students = data);
  }

  adminLogin(uname,psw){
    if (uname=='admin' && psw=='admin'){
      this.newMessage("Admin");
      this.router.navigate(['/adminHomePage']);
      location.reload();
    }
    if (uname=='company' && psw=='company'){
      this.newMessage("company");
      this.router.navigate(['/companyProfile/home']);
      location.reload();
    }
    for (let index = 0; index < this.students.length; index++) {
      const student = this.students[index];
      if (uname==student.name && psw==student.password){
        this.newMessage(student.name+"");
        this.router.navigate(['/student']);
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

}
