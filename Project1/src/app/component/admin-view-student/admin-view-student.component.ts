import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { student } from '../Model/Student';
import { ReadUnamePswServiceService } from '../Services/read-uname-psw-service.service';
import { AdminDeleteStudentServiceService } from '../Services/admin-delete-student-service.service';


@Component({
  selector: 'app-admin-view-student',
  templateUrl: './admin-view-student.component.html',
  styleUrls: ['./admin-view-student.component.css']
})
export class AdminViewStudentComponent implements OnInit {

  students: student[];
  constructor(private deleteService: AdminDeleteStudentServiceService,private readService: ReadUnamePswServiceService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.readService.getData()
    .subscribe(data => this.students = data);
    console.log(this.students);
  }

  deleteStudent(name){
    //this.deleteService.deleteStudentData(name);
  }
  /*
  onSubmit(formdata:NgForm){
  this.readService.getData()
   .subscribe((data : student[] )=> {
       this.students = data;
       localStorage.clear();
       localStorage.setItem('participant',JSON.stringify(data));
   });
    
  } */ 
}
