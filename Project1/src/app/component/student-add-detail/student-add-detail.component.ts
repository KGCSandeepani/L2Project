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
  constructor(private updateService:AdminUpdateStudentService) { }

  ngOnInit() {
  }

  onSubmit(formdata:NgForm){
     console.log(formdata.value.name);
    this.updateService.updateStudentData(formdata)
    
    .subscribe((data : student )=> {
        this.student = data;
        formdata.reset();    
    });
}
}
