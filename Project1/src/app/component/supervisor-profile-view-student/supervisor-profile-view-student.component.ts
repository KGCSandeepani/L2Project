import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { student } from '../Model/Student';
import { ReadUnamePswServiceService } from '../Services/read-uname-psw-service.service';
// import { AdminDeleteStudentServiceService } from '../Services/admin-delete-student-service.service';
//import { AdminUpdateStudentServiceService } from '../Services/admin-update-student-service.service';

@Component({
  selector: 'app-supervisor-profile-view-student',
  templateUrl: './supervisor-profile-view-student.component.html',
  styleUrls: ['./supervisor-profile-view-student.component.css']
})
export class SupervisorProfileViewStudentComponent implements OnInit {
  [x: string]: any;
  id:string;
  students: student[];

  constructor(
    // private deleteService: AdminDeleteStudentServiceService,
    private readService: ReadUnamePswServiceService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.readService.getData()
    .subscribe(data => this.students = data);
    console.log(this.students);
  }
  // onDelete(name) {
  //   this.deleteService.deleteStudentData(name).subscribe(result=>{
  //     console.log(result);
  //     this.ngOnInit();
  //   },error => console.log('There was an error: ', error))}

    getData(id:string){
      this.id=id;
      console.log(this.id+'getData function 1')
      this.readService.getId(this.id);
      return id;
    }

    getDataCom(id:string){
      this.id=id;
      console.log(this.id+'getDataCom function 1')
      this.readService.getId(this.id);
      return id;
    }


}
