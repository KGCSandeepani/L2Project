import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { AuthChatASService } from '../Services/auth-chat-a-s.service';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import {ChatMessage} from '../Model/Chat-message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceASService {
  user: firebase.User;
  chatMessage: ChatMessage;
  chatMessages: AngularFireList<ChatMessage>;
  //chatMessages: AngularFireList<string>;
  userName: Observable<string>;

  constructor(private db: AngularFireDatabase,
    private afAuth: AngularFireAuth) {
      this.afAuth.authState.subscribe(auth => {
        if (auth !== undefined && auth !== null) {
          this.user = auth;
        }
        //this.getUser().set(a => {
         // this.userName = a.displayName;
        //});

      
      });
     }
     sendMessage(msg: string) {
      const timestamp = this.getTimeStamp();
      console.log(msg);
      console.log("inside send msg");
      
  
      
      //const email = this.user.email;
      this.chatMessages = this.getMessages();
      this.chatMessages.push({
        message: msg,
        timeSent: new Date,
        userName: 'sampleuser',
        receiver: 'samplemail' });
    }
    getMessages(): AngularFireList<ChatMessage> {
      console.log("inside get msg");
      return this.db.list('messages',ref => ref.orderByKey().limitToLast(25));
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
}
