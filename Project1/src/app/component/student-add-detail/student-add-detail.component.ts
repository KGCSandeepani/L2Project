import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { student } from '../Model/Student';
import { NoOfCompany } from '../Model/NoOfCompany';
import { AdminUpdateStudentService } from '../Services/admin-update-student.service';
import { GetNoOfCompanyService } from '../Services/get-no-of-company.service';

@Component({
  selector: 'app-student-add-detail',
  templateUrl: './student-add-detail.component.html',
  styleUrls: ['./student-add-detail.component.css']
})
export class StudentAddDetailComponent implements OnInit {

  student : student;
  noOfCompany : NoOfCompany;
  num : number;
  constructor(private updateService : AdminUpdateStudentService, private getNoOfCompany : GetNoOfCompanyService, private route : ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.getNoOfCompany.getData()
    .subscribe(data => {this.noOfCompany = data,
    console.log(this.noOfCompany.amount)
  });
    
    
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
