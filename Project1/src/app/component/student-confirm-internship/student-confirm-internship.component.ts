import { Component, OnInit } from '@angular/core';
import { CompanyGetStudentlistService } from '../Services/company-get-studentlist.service';
import { StuSelectedCompany } from '../Model/StuSelectedCompany';
import { DataPassService } from '../Services/data-pass.service';
import { StudentConfirmCompanyService } from '../Services/student-confirm-company.service';

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

  constructor(private readStudentList : CompanyGetStudentlistService, private data : DataPassService, private confirmCompanyService :StudentConfirmCompanyService) { }

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

    

  }

  getCompany(organization : String){
    this.selectedCompany = organization;
  }

  confirm(){
    console.log(this.selectedCompany);
    this.confirmCompanyService.updateStudentData(this.value,this.selectedCompany)
    .subscribe();
  }

}
