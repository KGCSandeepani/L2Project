import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { student } from '../Model/Student';
import { NoOfCompany } from '../Model/NoOfCompany';
import { company } from 'src/app/component/Model/Company';
import { AdminUpdateStudentService } from '../Services/admin-update-student.service';
import { GetNoOfCompanyService } from '../Services/get-no-of-company.service';
import { AdminViewCompanyService } from 'src/app/component/Services/admin-view-company.service';
import { isUndefined, isNull } from 'util';

@Component({
  selector: 'app-student-add-detail',
  templateUrl: './student-add-detail.component.html',
  styleUrls: ['./student-add-detail.component.css']
})
export class StudentAddDetailComponent implements OnInit {

  student : student;
  noOfCompany : NoOfCompany;
  num : number ;
  array : Array<number> =[];
  company: Array<company>=[];
  //company1: company[];

  constructor(private updateService : AdminUpdateStudentService,private readCompanyService: AdminViewCompanyService, private getNoOfCompany : GetNoOfCompanyService, private route : ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.getNoOfCompany.getData()
    .subscribe(data => {this.noOfCompany = data;
      this.num=this.noOfCompany.amount;
    //console.log(this.noOfCompany.amount+" : "+this.num);  
    
    for (let index = 0; index < this.num; index++) {
      this.array[index]=index+1;  
      //console.log(index+" : "+this.array[index]);    
    }
    //console.log("nnn "+this.array.length);  
    });

    this.readCompanyService.getData()
      .subscribe(data => {this.company = data
        //,console.log("aaasssddd "+this.company.length); 
       });
      
    //let i = 0;
    //console.log(this.company.length);   
    //for (let index = 0; index < this.company.length; index++) {
     //if (this.company[index].doInternship=='yes') {
      //this.company1[i] = this.company[index];
      //i++;
     //}  
    //}
  }

  getCompany(item: number,companyname){
    console.log(item+" : "+ companyname);
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

  //arrayOne(n: number): any[] {
  //  console.log("sss "+n+" "+this.num);
  //  return Array(this.num);
  //}

}
