import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../Services/data-pass.service';
import { Router } from '@angular/router';
import { ReadUnamePswServiceService } from 'src/app/component/Services/read-uname-psw-service.service';
import { LoggingStudentService } from '../Services/logging-student.service';
import { student } from '../Model/Student';
import { relative } from 'path';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
name:string;
  

  loger: string ;
  message : string;
  logstudent : student;

  constructor(private data : DataPassService,private router : Router, private logStudent: LoggingStudentService) { }

  ngOnInit() {
    this.loger = this.data.getMessage();
    console.log(this.loger+"in the student");
  }

  logout(){
    sessionStorage.clear();    
    this.router.navigate(['/login']);
  }

  studentAdd(){
    this.logStudent.getData(this.loger)
      .subscribe(data => {
        this.logstudent = data;
        if (this.logstudent.cgpa == null) {          
          this.router.navigate(['student/studentAdd']);        
        } else {
          this.router.navigate(['student/studentAddSuccess']);    
         }
      });
  }
 

}
