import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as firebase from 'firebase/app';
import { DataPassService } from '../Services/data-pass.service';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { AdminreadstaffService } from 'src/app/component/Services/adminreadstaff.service';
import { staff } from '../Model/Staff';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})

export class FeedbackComponent implements OnInit {
  foods: Food[] = [
    {value: '1st', viewValue: '1st'},
    {value: '2nd', viewValue: '2nd'},
    {value: '3rd', viewValue: '3rd'}
  ];
  terms: Termm[] = [
    {value: '0', viewValue: '1'},
    {value: '1', viewValue: '2'},
    {value: '2', viewValue: '3'}
  ];
  name:string;
  supervisor:string;
  term:string;
  feedback:string;
  staff: staff[];
  constructor(private formBuilder: FormBuilder,private db: AngularFireDatabase, 
    private dataPass: DataPassService,private readService: AdminreadstaffService) { }

  ngOnInit() {
    this.name=this.dataPass.getMessage();
    this.readService.getData()
    .subscribe(data => this.staff = data);
    console.log(this.staff);
    
  }
  setSupervisor(name:string){
    this.supervisor=name;
  }
  setTerm(name:string){
    this.term=name;
  }
  
  saveMessage(){
    var messagesRef = firebase.database().ref('feedback');
// console.log(this.name+this.supervisor+this.term+this.feedback);
    messagesRef.push({
      name: this.name,
      supervisor:this.supervisor,
      term:this.term,
      feedback:this.feedback
    });
    this.name="";
    this.term="";
    this.supervisor="";
    this.feedback="";
  }
}
export interface Food {
  value: string;
  viewValue: string;
}
export interface Termm {
  value: string;
  viewValue: string;
}