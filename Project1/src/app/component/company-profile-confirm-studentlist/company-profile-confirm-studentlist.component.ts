import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../Services/data-pass.service';
import { GetAllCompanyInternshipDetailsService } from '../Services/get-all-company-internship-details.service';
import { CompanyInternshipDetails } from '../Model/CompanyInternshipDetails';
import { student } from '../Model/Student';
import { LoggingStudentService } from '../Services/logging-student.service';
import { CompanyConfirmStudentService } from '../Services/company-confirm-student.service';
import { StdentAvailabilityChangeService } from '../Services/stdent-availability-change.service';
import { ReadUnamePswServiceService } from 'src/app/component/Services/read-uname-psw-service.service';

@Component({
  selector: 'app-company-profile-confirm-studentlist',
  templateUrl: './company-profile-confirm-studentlist.component.html',
  styleUrls: ['./company-profile-confirm-studentlist.component.css']
})
export class CompanyProfileConfirmStudentlistComponent implements OnInit {

  value: String;
  comInternship: Array<CompanyInternshipDetails> = [];
  stuList: Array<student> = [];
  student: student;
  i=0;
  id:string;

  constructor(private data : DataPassService, private internshipService: GetAllCompanyInternshipDetailsService,
    private getStudent:LoggingStudentService, private companyConfirmation: CompanyConfirmStudentService,
    private studentAvailabilityChangeService : StdentAvailabilityChangeService, private readService: ReadUnamePswServiceService) { }

  ngOnInit() {
    this.value = this.data.getMessage();

    this.internshipService.getData()
    .subscribe(data => {this.comInternship = data;
      this.comInternship.forEach(element => {
        if(element.organization==this.value && (element.companyConfirmation==null || element.companyConfirmation==false)){
          this.getStudent.getData(element.name)
          .subscribe(data => {
            this.student=data;
            if(this.student.availability){
              this.stuList[this.i] = this.student;
              this.i++;
            }     
          });
        }
      });
    });

  }

  onAccept(name: String){
    this.companyConfirmation.updateCompanyInternshipDetails(name,true)
    .subscribe(result=>{

      this.studentAvailabilityChangeService.updateStudentData(name,false)
      .subscribe(result=>{
        this.ngOnInit();
      },error => console.log('There was an error: ', error));
      
    },error => console.log('There was an error: ', error)
    );

    
  }

  onReject(name: String){
    this.companyConfirmation.updateCompanyInternshipDetails(name,false)
    .subscribe(result=>{
      console.log(result);
      this.ngOnInit();
    },error => console.log('There was an error: ', error));
  }

  getData(id:string){
    this.id=id;
    this.readService.getId(this.id);
    return id;
  }

}
