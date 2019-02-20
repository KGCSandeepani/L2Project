import { Component, OnInit, OnChanges, SimpleChange, Input } from '@angular/core';
import { ChatServiceASService } from '../Services/chat-service-a-s.service'
import { Observable } from 'rxjs';
import { ChatMessage } from '../Model/Chat-message.model';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { DoCheck, KeyValueDiffers, KeyValueDiffer } from '@angular/core';
import { stringify } from '@angular/core/src/util';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

import { DataPassService } from '../Services/data-pass.service';
@Component({
  selector: 'app-feed-a-s',
  templateUrl: './feed-a-s.component.html',
  styleUrls: ['./feed-a-s.component.css']

})
export class FeedASComponent implements OnInit, OnChanges {
  feeds: AngularFireList<any>
  ChatMessage: any[];
  differ: any;
  userN: string; // clicked user
  items: Observable<any[]>;
  value: string = '';
  loger: string;// currently logged user
  logerType: string; // currently logged user type
  chatListUserType: string = "Student"; // clicked type

  //for comparing two student numbers
  num1: Number;
  num2: Number;
  value1: string;
  value2: string;
  constructor(private chat: ChatServiceASService, private db: AngularFireDatabase, 
    private data: DataPassService, private _scrollToService: ScrollToService) {

      this.loger = this.data.getMessage();

  }

  ngOnInit() {

    this.viewMessage();

  }

  ngOnChanges() {
    this.logerType = this.data.getString();
    this.loger = this.data.getMessage();
    // console.log(this.loger +" loger typeeeeeeeeeeee");
    // this.logerType = this.chat.sendClickedUserTypeToFeed();
    this.chat.cast.subscribe((userN) => {
      this.userN = userN; //this.userN is clicked user from userlist
      if (this.getLoggedUserType(this.loger) == "Admin" && this.getClickedUserType(this.userN) == "Student") {
        this.items = this.db.list('messages', db => db.orderByChild("senderReceiver").equalTo("Admin" + "_" + this.userN)).valueChanges();
      }
      // else if(this.logerType=="Admin"&& this.chatListUserType=="Company"){
      //   this.items = this.db.list('messages', db => db.orderByChild("senderReceiver").equalTo(this.loger + "_" + this.userN)).valueChanges();

      // }
      else if(this.logerType=="Supervisor"&& this.getClickedUserType(this.userN)=="Student"){
        this.items = this.db.list('messages', db => db.orderByChild("senderReceiver").equalTo(this.loger + "_" + this.userN)).valueChanges();

      }
      else if((this.logerType=="Student"&& this.getClickedUserType(this.userN)=="Student") && this.compareTwoIndexNumbers(this.loger,this.userN)){
        this.items = this.db.list('messages', db => db.orderByChild("senderReceiver").equalTo(this.loger + "_" + this.userN)).valueChanges();

      }
      else {
        this.items = this.db.list('messages', db => db.orderByChild("senderReceiver").equalTo(this.userN + "_" + "Admin")).valueChanges();

      }
      // this.items = this.db.list('messages',db => db.orderByChild("receiver").equalTo(this.userN)).valueChanges();

    });
    // window.scrollTo(0,document.body.scrollHeight);
  }
  viewMessage() {
    this.loger = this.data.getMessage();
    this.logerType = this.data.getString();
    this.chat.cast.subscribe((userN) => {
      this.userN = userN; //this.userN is clicked user from userlist
      if (this.getLoggedUserType(this.loger) == "Admin" && this.getClickedUserType(this.userN) == "Student") {
        this.items = this.db.list('messages', db => db.orderByChild("senderReceiver").equalTo(this.loger  + "_" + this.userN)).valueChanges();
      }
      // else if(this.logerType=="Admin"&& this.chatListUserType=="Company"){
      //   this.items = this.db.list('messages', db => db.orderByChild("senderReceiver").equalTo(this.loger + "_" + this.userN)).valueChanges();

      // }
      else if(this.logerType=="Supervisor"&& this.getClickedUserType(this.userN)=="Student"){
        this.items = this.db.list('messages', db => db.orderByChild("senderReceiver").equalTo(this.loger + "_" + this.userN)).valueChanges();

      }
      else if((this.logerType=="Student"&& this.chatListUserType=="Student") && 
      this.compareTwoIndexNumbers(this.loger,this.userN)){
        this.items = this.db.list('messages', db => db.orderByChild("senderReceiver").equalTo(this.loger + "_" + this.userN)).valueChanges();

      }
      else {
        this.items = this.db.list('messages', db => db.orderByChild("senderReceiver").equalTo(this.userN + "_" + this.loger )).valueChanges();
        console.log("inside else of feed");
      }
      // this.items = this.db.list('messages',db => db.orderByChild("receiver").equalTo(this.userN)).valueChanges();

    });


  }

  getLoggedUserType(name: string) {
    if(this.loger=="Admin"){
      return "Admin";
    }
    return "Student";
  }
  getClickedUserType(name: string) {
    if(this.userN=="Admin"){
      return "Student";
    }
    return "Student";
  }

  compareTwoIndexNumbers(index1: string, index2: string, ) {
    this.value1 = index1.substr(0, 7);
    this.value2 = index2.substr(0, 7);
    console.log(this.value1);
    this.num1 = parseInt(this.value1, 10);
    this.num2 = parseInt(this.value2, 10);

    if (this.num1 > this.num2) {
      return true;
    }
    return false;
  }


}
