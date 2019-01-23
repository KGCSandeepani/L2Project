import { Component, OnInit } from '@angular/core';
import { StuSelectedCompany } from 'src/app/component/Model/StuSelectedCompany';
import { student } from 'src/app/component/Model/Student';
import { ReadUnamePswServiceService } from 'src/app/component/Services/read-uname-psw-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-view-detail',
  templateUrl: './student-view-detail.component.html',
  styleUrls: ['./student-view-detail.component.css']
})
export class StudentViewDetailComponent implements OnInit {


  constructor(private readService: ReadUnamePswServiceService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit() {
  }
  

}
