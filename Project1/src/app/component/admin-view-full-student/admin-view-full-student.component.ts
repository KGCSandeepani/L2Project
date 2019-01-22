import { Component, OnInit } from '@angular/core';
import { ReadUnamePswServiceService } from 'src/app/component/Services/read-uname-psw-service.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { student } from 'src/app/component/Model/Student';

@Component({
  selector: 'app-admin-view-full-student',
  templateUrl: './admin-view-full-student.component.html',
  styleUrls: ['./admin-view-full-student.component.css']
})
export class AdminViewFullStudentComponent implements OnInit {
  //students: student[];
  student:student;
 /* id:any;
  name:any;
  password : any;
  username : any;
  email : any;
  phoneNo : any;
  l1s1 : number;
  l1s2 : number;
  l2s1 : number;
  l2s2 : number;
  cgpa : number;
  interest1 : String;
  interest2 : String;
  interest3 : String; 
  cv : null;   
  position: DoubleRange[]
 // array : Array<number> =[];*/
  constructor(private readService: ReadUnamePswServiceService,private route : ActivatedRoute,private router : Router) { }

  ngOnInit() {

    this.retrieveData();
   
  }

 /* retrieveData(){
    this.readService.reteriveData()
    .subscribe(data => this.students = data);
    console.log(this.student);
  }*/
  
  retrieveData(){
  
    this.readService.reteriveData()
    .subscribe((data : student )=> {
      this.student = data;
      console.log(this.student);
   
  });
}
}
