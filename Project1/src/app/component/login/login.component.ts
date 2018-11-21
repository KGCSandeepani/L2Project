import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { student } from '../Model/Student';
import { ReadUnamePswServiceService } from '../Services/read-uname-psw-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  students: student[];
  constructor(private route : ActivatedRoute,private readService: ReadUnamePswServiceService,private router : Router) { }

  ngOnInit() { 
    this.readService.getData()
    .subscribe(data => this.students = data);
    console.log(this.students);   
  }

  adminLogin(uname,psw){
    if (uname=='admin' && psw=='admin'){
      this.router.navigate(['/adminHomePage']);
    }
    if (uname=='company' && psw=='company'){
      this.router.navigate(['/companyProfile/home']);
    }
    for (let index = 0; index < this.students.length; index++) {
      const student = this.students[index];
      if (uname==student.name && psw==student.password){
        this.router.navigate(['/student']);
      }
    }
  }

  signup(){
    this.router.navigate(['/companySignup']);
  }

}
