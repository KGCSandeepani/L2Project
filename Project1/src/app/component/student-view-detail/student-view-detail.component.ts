import { Component, OnInit } from '@angular/core';
import { StuSelectedCompany } from 'src/app/component/Model/StuSelectedCompany';
import { student } from 'src/app/component/Model/Student';
import { ReadUnamePswServiceService } from 'src/app/component/Services/read-uname-psw-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataPassService } from 'src/app/component/Services/data-pass.service';

@Component({
  selector: 'app-student-view-detail',
  templateUrl: './student-view-detail.component.html',
  styleUrls: ['./student-view-detail.component.css']
})
export class StudentViewDetailComponent implements OnInit {
  loger: string ;
  message : string;
  student:student;
  StuSelectedCompany:StuSelectedCompany[];
  name:string;
  constructor(private data : DataPassService,private readService: ReadUnamePswServiceService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.loger = this.data.getMessage();
    console.log(this.loger+"in the student view");
    this.readService.getId(this.loger);
    this.readData();
    this.retrieveCom();
    this.name = this.readService.setId();
        
  }
  
  readData(){
    this.readService.reteriveData()
    .subscribe((data : student )=> {
      this.student = data;
      console.log(this.student);
   
   });
}

  retrieveCom(){
    console.log('in the com');
    this.readService.reteriveComData()
    .subscribe((data : StuSelectedCompany[] )=> {
      this.StuSelectedCompany = data;
      console.log(this.StuSelectedCompany);
   
  });
  }

}
