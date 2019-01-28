import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { AuthChatASService } from '../Services/auth-chat-a-s.service';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { ChatMessage } from '../Model/Chat-message.model';
import { DataPassService } from '../Services/data-pass.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceASService {
  user: firebase.User;
  chatMessage: ChatMessage;
  chatMessages: AngularFireList<ChatMessage>;
  //chatMessages: AngularFireList<string>;
  loggedUserType: string;
  receiverName: string;
  senderName: string;
  message: string;
  userR: string = '';
  sendRece:string;
  chatListUserType: string; // clicked type
  private userN = new BehaviorSubject<string>(this.userR);
  cast = this.userN.asObservable();
//for comparing two student numbers
num1:Number;
num2:Number;
value1:string;
value2:string;

  constructor(private data: DataPassService, private db: AngularFireDatabase) {

    this.data.currentMessage.subscribe(message => this.message = message);
    this.senderName = this.data.getMessage();
    this.cast.subscribe(userN => this.userR = userN);

  }
  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();

    //generating a comman tag from sender name and receiver name
    if(this.loggedUserType=="Admin" && this.getClickedUserType(this.receiverName)=="Student"){
      this.sendRece = this.senderName + "_" + this.userR;
      console.log(this.sendRece+" insode admin student ");
    }
    // else if(this.loggedUserType=="Admin"&& this.chatListUserType=="Company"){
    //   this.sendRece = this.senderName + "_" + this.userR;
    // }
    // else if(this.loggedUserType=="Supervisor"&& this.chatListUserType=="Student"){
    //   this.sendRece = this.senderName + "_" + this.userR;
    // }
    // else if((this.loggedUserType=="Student"&& this.chatListUserType=="Student") && this.compareTwoIndexNumbers(this.senderName,this.receiverName)){
    //   this.sendRece = this.senderName + "_" + this.userR
    // }
    else{
      this.sendRece = this.userR  + "_" + this.senderName

    }

    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: msg,
      timeSent: new Date(),
      userName: this.senderName,
      receiver: this.userR,
      senderReceiver:this.sendRece
      // senderReceiver: this.senderName + "_" + this.userR
    });
  }
  getMessages(): AngularFireList<ChatMessage> {

    return this.db.list('messages', ref => ref.orderByKey().limitToLast(25));
  }
  getTimeStamp() {
    const now = new Date();
    const date = now.getUTCFullYear() + '/' +
      (now.getUTCMonth() + 1) + '/' +
      now.getUTCDate();
    const time = now.getUTCHours() + ':' +
      now.getUTCMinutes() + ':' +
      now.getUTCSeconds();

    return (date + ' ' + time);
  }

  //to send which user that user has clicked.
  editUser(newUser) {
    this.userN.next(newUser);
  }

  loggedUser(newUser) {
    //to get which type of user logged in
    this.loggedUserType = newUser;
    console.log(this.loggedUserType + "is logged user");
  }
  compareTwoIndexNumbers(index1:string,index2:string,){
    this.value1 = index1.substr(0, 7);
    this.value2 = index2.substr(0, 7);
    console.log(this.value1);
    this.num1=parseInt(this.value1, 10);
    this.num2=parseInt(this.value2, 10);

    if(this.num1>this.num2){
      return true;
    }
    return false;
  }
  getClickedUserType(name: string) {
    return "Student";
  }
  sendClickedUserTypeToFeed() {
    return this.loggedUserType;
  }


}
