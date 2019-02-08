import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { DataPassService } from '../Services/data-pass.service';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
@Component({
  selector: 'app-company-feedback',
  templateUrl: './company-feedback.component.html',
  styleUrls: ['./company-feedback.component.css']
})
export class CompanyFeedbackComponent implements OnInit {
  Name:string="";
  Email:string="";
  Subject:string="";
  Feedback:string="";
  logger:string;
  constructor(private db: AngularFireDatabase, 
    private dataPass: DataPassService) { }

  ngOnInit() {
  }
  saveMessage(){
this.logger=this.dataPass.getMessage();
    var messagesRef = firebase.database().ref('companyFeedback');
// console.log(this.name+this.supervisor+this.term+this.feedback);
    messagesRef.push({
      name: this.Name,
      email:this.Email,
      subject:this.Subject,
      feedback:this.Feedback,
      sender:this.logger
    });
    this.Name="";
    this.Email="";
    this.Subject="";
    this.Feedback="";
  }
}
