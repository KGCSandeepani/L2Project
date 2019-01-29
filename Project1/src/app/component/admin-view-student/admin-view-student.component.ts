import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { student } from '../Model/Student';
import { CompanyInternshipDetails } from '../Model/CompanyInternshipDetails';
import { ReadUnamePswServiceService } from '../Services/read-uname-psw-service.service';
import { AdminDeleteStudentServiceService } from '../Services/admin-delete-student-service.service';
import { GetAllCompanyInternshipDetailsService } from '../Services/get-all-company-internship-details.service';
//import { AdminUpdateStudentServiceService } from '../Services/admin-update-student-service.service';

@Component({
  selector: 'app-admin-view-student',
  templateUrl: './admin-view-student.component.html',
  styleUrls: ['./admin-view-student.component.css']
})
export class AdminViewStudentComponent implements OnInit {
  [x: string]: any;
  id:string;
  students: student[];
  comInternship: Array<CompanyInternshipDetails> = [];
  constructor(private deleteService: AdminDeleteStudentServiceService,private readService: ReadUnamePswServiceService,
    private route: ActivatedRoute,private router: Router, private internshipService: GetAllCompanyInternshipDetailsService) { }

  ngOnInit() {
    this.readService.getData()
    .subscribe(data => this.students = data);
    console.log(this.students);

    this.internshipService.getData()
    .subscribe(data => this.comInternship = data);
  }

  onDelete(name) {
    this.deleteService.deleteStudentData(name).subscribe(result=>{
      console.log(result);
      this.ngOnInit();
    },error => console.log('There was an error: ', error))}

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
