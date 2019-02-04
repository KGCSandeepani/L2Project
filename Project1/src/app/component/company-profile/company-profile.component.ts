import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../Services/data-pass.service';
import { Router } from '@angular/router';
import { LoggingStudentService } from 'src/app/component/Services/logging-student.service';
import { GetPresentBatchService } from 'src/app/component/Services/get-present-batch.service';
import { CompanyGetStudentlistService } from 'src/app/component/Services/company-get-studentlist.service';
import { GetOneCompanyInternshipDetailsService } from 'src/app/component/Services/get-one-company-internship-details.service';
import { student } from 'src/app/component/Model/Student';
import { StuSelectedCompany } from 'src/app/component/Model/StuSelectedCompany';
import { Batch } from 'src/app/component/Model/Batch';
import { CompanyInternshipDetails } from 'src/app/component/Model/CompanyInternshipDetails';
import { GetAllCompanyInternshipDetailsService } from 'src/app/component/Services/get-all-company-internship-details.service';
import { CompanyConfirmStudentService } from 'src/app/component/Services/company-confirm-student.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  loger: string ;
  message : string;
  value: string ;
  batch: Batch[];
  disable :boolean ;
  cid : CompanyInternshipDetails;
  students: Array<student>=[];
  doInternship = "true";
  stuList : StuSelectedCompany[];
  stuList2 : Array<student> = [];
  i=0;
  student : student;
  count=0;
  bagdeCount=0;
  comInternship: Array<CompanyInternshipDetails> = [];
  stuList3: Array<student> = [];
  
  constructor(private data : DataPassService, private getBatches: GetPresentBatchService, 
    private studentService : LoggingStudentService, private intrnshipService: GetOneCompanyInternshipDetailsService,
    private readStudentList : CompanyGetStudentlistService,private internshipService: GetAllCompanyInternshipDetailsService,
    private companyConfirmation: CompanyConfirmStudentService,
    private router : Router) { }

  ngOnInit() {
    this.loger = this.data.getMessage();
    this.getReqCOunt();
    this.getConfirmCount();
  }

  logout(){
    sessionStorage.clear();    
    this.router.navigate(['/login']);
  }

  getReqCOunt(){
    this.value = this.data.getMessage();
    
        this.getBatches.getAllData()
        .subscribe(data => {
          this.batch= data;
          this.batch.sort((a,b)=>b.batch-a.batch);
          this.disable = this.batch[0].enable;
    
          if( !this.disable ){
          
            this.readStudentList.getStudentList()
            .subscribe(data => {this.stuList = data;
              this.stuList.forEach(element => {
                if(element.organization == this.value){
                    this.intrnshipService.getData(element.name)
                    .subscribe(data => {
                    this.cid=data;
                      if (this.cid==null){
                        this.studentService.getData(element.name)
                        .subscribe(data => {this.student = data;
                          this.stuList2[this.i] = this.student;
                          this.i++;
                          this.count = this.stuList2.length;
                          
                        })  
                      }  
                     
                    });
                }
              });
            }); 
          }
          
        });
            
  }
k=0;

  getConfirmCount(){
    this.value = this.data.getMessage();
    
        this.internshipService.getData()
        .subscribe(data => {this.comInternship = data;
          this.comInternship.forEach(element => {
            if(element.organization==this.value && (element.companyConfirmation==null || element.companyConfirmation==false)){
              this.studentService.getData(element.name)
              .subscribe(data => {
                this.student=data;
                if(this.student.availability){
                  this.stuList3[this.k] = this.student;
                  this.k++;
                  this.bagdeCount = this.stuList3.length;
                }     
              });
            }
          });
        });
    
  }

  clearCount() {
    this.count = 0;
    this.bagdeCount = 0;
  }
  
}
