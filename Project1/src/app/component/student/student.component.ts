import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../Services/data-pass.service';
import { Router } from '@angular/router';
import { ReadUnamePswServiceService } from 'src/app/component/Services/read-uname-psw-service.service';
import { LoggingStudentService } from '../Services/logging-student.service';
import { student } from '../Model/Student';
//import { relative } from 'path';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { UserListService } from '../Services/user-list.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
name:string;
msgCount: number = 0;
currentUserAdmin: Observable<any>;
  currentUserRefAdmin: AngularFireList<any>
  loger: string ;
  message : string;
  logstudent : student;

  constructor(private data : DataPassService,private db: AngularFireDatabase,
    private router : Router,private user: UserListService,
     private logStudent: LoggingStudentService) { }

  ngOnInit() {
    // this.loger = this.data.getMessage();
    this.msgNotification();
    console.log(this.loger+"in the student");
  }
  msgNotification() {
    this.loger = this.data.getMessage();
    this.currentUserRefAdmin = this.db.list('userList', ref => ref.child(this.loger).orderByChild('readCount'));
    this.currentUserAdmin = this.currentUserRefAdmin.valueChanges();
    this.currentUserAdmin.subscribe(res => { this.msgCount = res[0];console.log("msgCount", res[0] ); });
  
  }

  logout(){
    sessionStorage.clear();    
    this.router.navigate(['/login']);
  }

  clearNotification() {
    //clear notification count of user
    console.log("insdie clear notification");
    this.msgCount = 0;
    this.user.clear();
  }

  studentAdd(){
    this.logStudent.getData(this.loger)
      .subscribe(data => {
        this.logstudent = data;
        if (this.logstudent.cgpa == null) {          
          this.router.navigate(['student/studentAdd']);        
        } else {
          this.router.navigate(['student/studentAddSuccess']);    
         }
      });
  }
 

}
