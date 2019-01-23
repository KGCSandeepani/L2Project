import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../Services/data-pass.service';
import { Router } from '@angular/router';

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
  }

  logout(){
    sessionStorage.clear();    
    this.router.navigate(['/login']);
  }

 

}
