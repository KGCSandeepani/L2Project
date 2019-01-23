import { Component, OnInit } from '@angular/core';
import { CompanyUpdateInternshipService } from '../Services/company-update-internship.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataPassService } from '../Services/data-pass.service';
import { StuSelectedCompany } from '../Model/StuSelectedCompany';
import { CompanyGetStudentlistService } from '../Services/company-get-studentlist.service';
import { ReadUnamePswServiceService } from 'src/app/component/Services/read-uname-psw-service.service';

@Component({
  selector: 'app-company-profile-studentlist',
  templateUrl: './company-profile-studentlist.component.html',
  styleUrls: ['./company-profile-studentlist.component.css']
})
export class CompanyProfileStudentlistComponent implements OnInit {

  KEY = 'logger';
  value: string ;
  id:string;

  doInternship = "true";
  stuList : StuSelectedCompany[];

  constructor(private readService: ReadUnamePswServiceService,private readStudentList : CompanyGetStudentlistService, private updateInternship : CompanyUpdateInternshipService, private router:Router, private data : DataPassService) { }

  ngOnInit() {
    this.value = this.data.getMessage();

    this.readStudentList.getStudentList(this.value)
    .subscribe(data => this.stuList = data);
  }

  onChange(event : any){
    this.doInternship = event.target.value;
    if(this.doInternship=="true"){
      console.log(this.value+" : "+this.doInternship);
      this.updateInternship.updateCompanyInternshipData(this.value,true)
      .subscribe(res=>{
      });
    }else{
      console.log(this.value+" : "+this.doInternship);
      this.updateInternship.updateCompanyInternshipData(this.value,false)
      .subscribe(res=>{
      });
    }
    
  }

  getData(id:string){
    this.id=id;
    console.log(this.id+'getData function 1')
    this.readService.getId(this.id);
    return id;
  }

}
