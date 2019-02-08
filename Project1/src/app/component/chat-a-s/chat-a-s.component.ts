import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { User } from '../Model/User.model';
import { ChatServiceASService } from '../Services/chat-service-a-s.service'
import { UserListService } from '../Services/user-list.service'
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-chat-a-s',
  templateUrl: './chat-a-s.component.html',
  styleUrls: ['./chat-a-s.component.css']
})
export class ChatASComponent implements OnInit {
  users: Observable<any[]>;
  message: string;
  userName:string="";
  constructor(private chat: ChatServiceASService, private _scrollToService: ScrollToService,
    private userlist: UserListService, private db: AngularFireDatabase) { }
  // Users:User[];
  ngOnInit() {
    this.userName=this.userlist.sendReceiver();
    this.chat.cast.subscribe((userN) => {
      this.userName = userN;

    // this.userlist.sendUser("Admin");// send currentlt logged in user to db
    // this.users=this.userlist.getMessages().valueChanges();// get that returned value
  });
  }
  send() {
    // console.log("inside send");
    // console.log(this.message);
    if(this.userName!=""){
    this.chat.sendMessage(this.message);
    this.message = "";
    // this.userlist.sendUser("Admin");
    this.userlist.update();
  }
  }

  // sendFire(User) {
  //   this.userlist.updateReadCount(User);



  // }
  clear(){
    this.userlist.clearRecepientMsgCount();
    this.userlist.clear();
  }


  handleSubmit(event) {
    if (event.keyCode == 13) {
      this.send();
    }
  }
  public triggerScrollTo() {

    const config: ScrollToConfigOptions = {
      target: 'destination'
    };

    // this._scrollToService.scrollTo(config);
  }

}

