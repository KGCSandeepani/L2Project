import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import * as firebase from 'firebase/app';
import { ChatMessage } from '../Model/Chat-message.model';
import { DataPassService } from '../Services/data-pass.service';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { LoggingSupervisorServiceService } from '../Services/logging-supervisor-service.service';
import { GetOneCompanyService } from 'src/app/component/Services/get-one-company.service';
import { staff } from 'src/app/component/Model/Staff';
import { company } from '../Model/Company';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceASService {
  user: firebase.User;
  chatMessage: ChatMessage;
  chatMessages: AngularFireList<ChatMessage>;
  //chatMessages: AngularFireList<string>;
  currentUserAdmin: Observable<any>;
  currentUserRefAdmin: AngularFireList<any>
  loggedUserType: string;
  receiverName: string;
  senderName: string;
  message: string;
  userR: string = '';
  sendRece: string; 
  chatListUserType: string; // clicked user type from userlist
  private userN = new BehaviorSubject<string>(this.userR);
  cast = this.userN.asObservable();
  //for comparing two student numbers
  num1: Number;
  num2: Number;
  value1: string;
  value2: string;

  staff: staff[];
  companies: company[];
  logCompany: company;
  logstaff: staff;
  loger;
  constructor(private data: DataPassService, private db: AngularFireDatabase,
    private logStaff: LoggingSupervisorServiceService, private getCompany: GetOneCompanyService) {

    this.data.currentMessage.subscribe(message => this.message = message);
    this.senderName = this.data.getMessage();
    this.cast.subscribe(userN => this.userR = userN);
    // this.checkStaff(this.senderName);

  }
  sendMessage(msg: string) {

    this.loger = this.data.getString();
    this.senderName = this.data.getMessage();
    //generating a comman tag from sender name and receiver name
    if (this.getLoggedUserType(this.senderName) == "Admin" && this.getClickedUserType(this.receiverName) == "Student") {
      this.sendRece = this.senderName + "_" + this.userR;
    }
    // else if(this.getLoggedUserType(this.senderName) =="Admin"&& this.getClickedUserType(this.receiverName)=="Company"){
    //   this.sendRece = this.senderName + "_" + this.userR;
    // }
    else if(this.loger=="Supervisor" && this.getClickedUserType(this.receiverName)=="Student"){
      this.sendRece = this.senderName + "_" + this.userR;

    }
    else if((this.loger =="Student"&& this.getClickedUserType(this.receiverName)=="Student") && 
    this.compareTwoIndexNumbers(this.senderName,this.userR)){
      this.sendRece = this.senderName + "_" + this.userR
    }
    else {

      this.sendRece = this.userR + "_" + this.senderName

    }
    this.senderName = this.data.getMessage();
    // console.log(this.senderName + " this is sender name at chat");
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: msg,
      timeSent: new Date().toString(),
      userName: this.senderName,
      receiver: this.userR,
      senderReceiver: this.sendRece,
      read: false
      // unreadMessageCount:0
      // senderReceiver: this.senderName + "_" + this.userR
    });
  }
  getMessages(): AngularFireList<ChatMessage> {

    return this.db.list('messages', ref => ref.orderByKey().limitToLast(25));
  }
  // getTimeStamp() {
  //   let now = new Date();
  //   let date = now.getUTCFullYear() + '/' + (now.getUTCMonth() + 1) + '/' + now.getUTCDate();
  //   let time = now.getUTCHours() + ':' + now.getUTCMinutes();

  //   return (date + ' ' + time).toString;
  // }

  //to send which user that user has clicked.
  editUser(newUser) {
    this.userN.next(newUser);
    
  }

  loggedUser(newUser) {
    //to get which type of user logged in
    this.loggedUserType = newUser;
    // console.log(this.loggedUserType + "is logged user");
  }
  compareTwoIndexNumbers(index1: string, index2: string, ) {
    // console.log(" inside compareTwoIndexNumbers "+index1+ index2);
    this.value1 = index1.substr(0, 7);
    this.value2 = index2.substr(0, 7);
    // console.log(this.value1+"  this.value1");
    this.num1 = parseInt(this.value1, 10);
    this.num2 = parseInt(this.value2, 10);

    if (this.num1 > this.num2) {
      return true;
    }
    return false;
  }
  getLoggedUserType(name: string) {
    // console.log("inside  get logged user type");
    if (name == "Admin") {
      return "Admin";
    } 
    
    return "Student";
  }
  getClickedUserType(name: string) {

    if (this.receiverName == "Admin") {
      return "Admin";
    // } else if (this.checkCompany(name)) {
    //   return "Company";
    // } else if (this.checkStaff(name)) {
     
    //   return "Supervisor";
    }
    // this.checkStaff(name);
    return "Student";
  }
  sendClickedUserTypeToFeed() {
    return this.loggedUserType;
  }

  checkCompany(name: string) {
    console.log("inside company checking");
    this.getCompany.getData(name)
      .subscribe(
        data => {
          this.logCompany = data;
          if (this.logCompany != null && name == this.logCompany.name) {
            return true;
          }
        }
      )

    return false;
  }

  checkStaff(name: string) {
    // this.logStaff.getData(name)
    //   .subscribe(data => {

    //     this.logstaff = data;
    //     // console.log('here'+this.logstaff.name);

    //     console.log(this.logStaff);
    //     if (this.logstaff != null && name == this.logstaff.name) {
    //       console.log('here' + this.logstaff.name);

    //       return true;
    //     }
    //   }
    //   )


    this.currentUserRefAdmin = this.db.list('userList', ref => ref.child(name).orderByChild('type'));
    this.currentUserAdmin = this.currentUserRefAdmin.valueChanges();
    this.currentUserAdmin.subscribe(res => {console.log("msgCountsss"+res[3] );
    this.data.setString(res[3]); });
    
  }

}
