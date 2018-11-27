import { Component, OnInit } from '@angular/core';
import { company } from 'src/app/component/Model/Company';
import { CompanySignupService } from 'src/app/component/Services/company-signup.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AdminAcceptTempCompanyService } from 'src/app/component/Services/admin-accept-temp-company.service';
import { AdminRejectTempCompanyService } from 'src/app/component/Services/admin-reject-temp-company.service';
//import { CompanySignupComponent } from 'src/app/component/company-signup.component';

@Component({
  selector: 'app-requested-company',
  templateUrl: './requested-company.component.html',
  styleUrls: ['./requested-company.component.css']
})
export class RequestedCompanyComponent implements OnInit {
  [x: string]: any;

  company: company[];
  company2: company;

  constructor(private deleteService: AdminRejectTempCompanyService,private readService: CompanySignupService,private accept: AdminAcceptTempCompanyService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.readService.getData()
    .subscribe(data => this.company = data);
    console.log(this.company);
    
  }

 
  name:String;
  location:String;
  email:String;
  contactNo:String;
  psw:String;
  newName:String;
  newLocation:String;
  newEmail:String;
  newContactNo:String;
  newPsw:String;

  onAccept(name,location,email,contactNo,psw){  
    this.newName=name;
    this.newLocation=location;
    this.newEmail=email;
    this.newContactNo=contactNo;
    this.newPsw=psw;
   
    this.accept.getCompanyData(this.newName,this.newLocation,this.newEmail,this.newContactNo,this.newPsw)
   .subscribe((data : company )=> {
    this.company2 = data;
  })
    
    
    this.deleteService.deleteTempCompanyData(name).subscribe(result=>{
      console.log(result);
      this.ngOnInit();
    },error => console.log('There was an error: ', error))

  
  }
  
  onReject(name){
    this.deleteService.deleteTempCompanyData(name).subscribe(result=>{
      console.log(result);
      this.ngOnInit();
    },error => console.log('There was an error: ', error))
  }

}
