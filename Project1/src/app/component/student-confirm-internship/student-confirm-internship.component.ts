import { Component, OnInit } from '@angular/core';
import { CompanyGetStudentlistService } from '../Services/company-get-studentlist.service';
import { StuSelectedCompany } from '../Model/StuSelectedCompany';
import { DataPassService } from '../Services/data-pass.service';
import { StudentConfirmCompanyService } from '../Services/student-confirm-company.service';
import { LoggingStudentService } from '../Services/logging-student.service';
import { student } from '../Model/Student';

@Component({
  selector: 'app-student-confirm-internship',
  templateUrl: './student-confirm-internship.component.html',
  styleUrls: ['./student-confirm-internship.component.css']
})
export class StudentConfirmInternshipComponent implements OnInit {

  stuList : StuSelectedCompany[];
  value: string ;
  companyList : Array<StuSelectedCompany> = [];
  i = 0;
  selectedCompany;
  logstudent : student;

  constructor(private logStudent : LoggingStudentService,private readStudentList : CompanyGetStudentlistService, 
    private data : DataPassService, private confirmCompanyService :StudentConfirmCompanyService) { }

  ngOnInit() {

    this.value = this.data.getMessage();

    this.readStudentList.getStudentList()
    .subscribe(data => {this.stuList = data;
      this.stuList.forEach(element => {
        if(element.name==this.value){
          this.companyList[this.i] = element;
        }
      });
    });

    this.logStudent.getData(this.value)
    .subscribe(data => {
      this.logstudent=data;     
    });

  }

  getCompany(organization : String){
    this.selectedCompany = organization;
  }

  confirm(){
    console.log(this.selectedCompany);
    this.confirmCompanyService.addCompanyInternshipDetails(this.value, this.selectedCompany, this.logstudent.batch)
    .subscribe();
  }

}
