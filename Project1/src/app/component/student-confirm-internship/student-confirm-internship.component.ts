import { Component, OnInit } from '@angular/core';
import { CompanyGetStudentlistService } from '../Services/company-get-studentlist.service';
import { StuSelectedCompany } from '../Model/StuSelectedCompany';
import { DataPassService } from '../Services/data-pass.service';
import { StudentConfirmCompanyService } from '../Services/student-confirm-company.service';
import { LoggingStudentService } from '../Services/logging-student.service';
import { GetOneCompanyInternshipDetailsService } from '../Services/get-one-company-internship-details.service';
import { student } from '../Model/Student';
import { CompanyInternshipDetails } from '../Model/CompanyInternshipDetails';
import { NgxNotificationService } from 'ngx-notification';
import { StdentAvailabilityChangeService } from '../Services/stdent-availability-change.service';

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
  cid : CompanyInternshipDetails;
  disableButton;

  constructor(private logStudent : LoggingStudentService,private readStudentList : CompanyGetStudentlistService, 
    private data : DataPassService, private confirmCompanyService :StudentConfirmCompanyService, 
    private ngxNotificationService: NgxNotificationService, private getCIDService: GetOneCompanyInternshipDetailsService,
    private studentAvailabilityChangeService : StdentAvailabilityChangeService) { }

  ngOnInit() {

    this.value = this.data.getMessage();

    this.readStudentList.getStudentList()
    .subscribe(data => {this.stuList = data;
      this.stuList.forEach(element => {
        if(element.name==this.value){
          this.companyList[this.i] = element;
          this.i++;
        }
      });
    });

    this.logStudent.getData(this.value)
    .subscribe(data => {
      this.logstudent=data;     
    });

    this.getCIDService.getData(this.value)
    .subscribe(data => {this.cid = data
      this.disableButton=this.cid.companyConfirmation});
      console.log("disable "+this.disableButton);

  }

  getCompany(organization : String){
    this.selectedCompany = organization;
  }

  confirm(){
    console.log(this.selectedCompany);
    if(this.selectedCompany==null){
      this.sendNotification1();
      return;
    }
    this.confirmCompanyService.addCompanyInternshipDetails(this.value, this.selectedCompany, this.logstudent.batch)
    .subscribe(result => {
      // this.studentAvailabilityChangeService.updateStudentData(name,true)
      // .subscribe();
      this.sendNotification();
    },error => {
      this.sendNotification1();
    });
  }

  sendNotification() {
    this.ngxNotificationService.sendMessage('Successfully confirm', 'success', 'bottom-right');
    //dark, light, success, info, warning, danger and none
    //top-left, top-right, bottom-left, bottom-right and center
  }

  sendNotification1() {
    this.ngxNotificationService.sendMessage('Please select company before confirm', 'danger', 'bottom-right');
    //dark, light, success, info, warning, danger and none
    //top-left, top-right, bottom-left, bottom-right and center
  }

}
