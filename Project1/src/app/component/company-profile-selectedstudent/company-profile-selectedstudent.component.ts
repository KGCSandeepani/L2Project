import { Component, OnInit } from '@angular/core';
import { CompanyUpdateInternshipService } from '../Services/company-update-internship.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataPassService } from '../Services/data-pass.service';
import { StuSelectedCompany } from '../Model/StuSelectedCompany';
import { CompanyGetStudentlistService } from '../Services/company-get-studentlist.service';
import { ReadUnamePswServiceService } from 'src/app/component/Services/read-uname-psw-service.service';
import { LoggingStudentService } from '../Services/logging-student.service';
import { student } from '../Model/Student';
import { GetAllCompanyInternshipDetailsService } from '../Services/get-all-company-internship-details.service';
import { CompanyInternshipDetails } from '../Model/CompanyInternshipDetails';
import { GetMaxBatchService } from '../Services/get-max-batch.service';

@Component({
  selector: 'app-company-profile-selectedstudent',
  templateUrl: './company-profile-selectedstudent.component.html',
  styleUrls: ['./company-profile-selectedstudent.component.css']
})
export class CompanyProfileSelectedstudentComponent implements OnInit {

   value: string ;
   maxBatch: number;
  // doInternship = "true";
  // stuList : StuSelectedCompany[];
  // stuList1 : Array<StuSelectedCompany> = [];
  // i=0;
  // student : student;
  
  comInternship: Array<CompanyInternshipDetails> = [];
  stuList: Array<student> = [];
  student: student;
  i=0;
  id: string;

  constructor(private readService: ReadUnamePswServiceService,private readStudentList : CompanyGetStudentlistService, 
    private updateInternship : CompanyUpdateInternshipService, private router:Router, private data : DataPassService, 
    private studentService : LoggingStudentService,private internshipService: GetAllCompanyInternshipDetailsService,
    private getMaxBatchService: GetMaxBatchService) { }

  ngOnInit() {
    this.value = this.data.getMessage();
    this.getMaxBatchService.getMaxBatch();
    this.maxBatch = parseInt(sessionStorage.getItem("maxBatch"), 10);
    console.log("max : "+this.maxBatch);
    // this.readStudentList.getStudentList()
    // .subscribe(data => {this.stuList = data;

    //   this.stuList.forEach(element => {
    //     if(element.organization == this.value){
    //         this.studentService.getData(element.name)
    //         .subscribe(data => {
    //         this.student=data;
    //           if (!this.student.availability && this.student.selectedCompany == this.value){
    //             this.stuList1[this.i] = element;
    //             this.i++;
    //           }
                 
    //         });
    //     }
    //   });
    // });

    this.internshipService.getData()
    .subscribe(data => {this.comInternship = data;
      this.comInternship.forEach(element => {       
        if(element.organization==this.value && element.companyConfirmation){
          console.log("aaa"+element.name)
          this.studentService.getData(element.name)
          .subscribe(data => {
            this.student=data;
            if(this.student.batch==this.maxBatch){
              this.stuList[this.i] = this.student;
              this.i++;
            }     
          });
        }
      });
    });

  }

  getData(id:string){
    this.id=id;
    this.readService.getId(this.id);
    return id;
  }

}
