import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { student } from '../Model/Student';
import { AdminUpdateStudentService } from '../Services/admin-update-student.service';

@Component({
  selector: 'app-student-add-detail',
  templateUrl: './student-add-detail.component.html',
  styleUrls: ['./student-add-detail.component.css']
})
export class StudentAddDetailComponent implements OnInit {

  student : student;
  constructor(private updateService:AdminUpdateStudentService,private route : ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(formdata:NgForm){
     console.log(formdata.value.name);
    this.updateService.updateStudentData(formdata,formdata.value.name)
    .subscribe(res=>{
      this.router.navigate(['student/studentAddSuccess']);
    });
    //.subscribe((data : student )=> {
    //    this.student = data;
    //    formdata.reset();    
    //});
}
}
