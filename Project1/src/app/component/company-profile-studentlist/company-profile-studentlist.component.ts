import { Component, OnInit } from '@angular/core';
import { CompanyUpdateInternshipService } from '../Services/company-update-internship.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataPassService } from '../Services/data-pass.service';

@Component({
  selector: 'app-company-profile-studentlist',
  templateUrl: './company-profile-studentlist.component.html',
  styleUrls: ['./company-profile-studentlist.component.css']
})
export class CompanyProfileStudentlistComponent implements OnInit {

  KEY = 'logger';
  value: string ;

  doInternship = "true";

  constructor(private updateInternship : CompanyUpdateInternshipService, private router:Router, private data : DataPassService) { }

  ngOnInit() {
    this.value = this.data.getMessage();
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

}
