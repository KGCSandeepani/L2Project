import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../Services/data-pass.service';
import { Router } from '@angular/router';
import { ReadUnamePswServiceService } from 'src/app/component/Services/read-uname-psw-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
name:string;
  

  loger: string ;
  message : string;
  constructor(private data : DataPassService,private router : Router) { }

  ngOnInit() {
    this.loger = this.data.getMessage();
    console.log(this.loger+"in the student");
  }

  logout(){
    sessionStorage.clear();    
    this.router.navigate(['/login']);
  }

 

}
