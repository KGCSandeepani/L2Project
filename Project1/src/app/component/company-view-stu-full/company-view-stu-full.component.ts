import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/component/Model/Student';
import { ReadUnamePswServiceService } from 'src/app/component/Services/read-uname-psw-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-view-stu-full',
  templateUrl: './company-view-stu-full.component.html',
  styleUrls: ['./company-view-stu-full.component.css']
})
export class CompanyViewStuFullComponent implements OnInit {
  student:student;
  
  constructor( private readService: ReadUnamePswServiceService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.retrieveData();
  }

  retrieveData(){
    
      this.readService.reteriveData()
      .subscribe((data : student )=> {
        this.student = data;
        console.log(this.student);
     
    });
  }

}

