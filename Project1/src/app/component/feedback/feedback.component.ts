import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import { DataPassService } from '../Services/data-pass.service';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  
  name:string;
  email:string;
  phone:string;
  feedback:string;
  constructor(private formBuilder: FormBuilder,private db: AngularFireDatabase, 
    private dataPass: DataPassService) { }

  ngOnInit() {
    
  }
 
  saveMessage(){
    var messagesRef = firebase.database().ref('feedback');

    messagesRef.push({
      name: this.name,
      email:this.email,
      phone:this.phone,
      feedback:this.feedback
    });
    this.name="";
    this.email="";
    this.phone="";
    this.feedback="";
  }
}
