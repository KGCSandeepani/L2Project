import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { AuthChatASService } from '../Services/auth-chat-a-s.service';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import {ChatMessage} from '../Model/Chat-message.model';
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
  
  receiverName :string;
  userName: string ;
  message : string;
  private userN =new BehaviorSubject<string>('john');
  cast =this.userN.asObservable();

  constructor(private data : DataPassService, private db: AngularFireDatabase,
    private afAuth: AngularFireAuth) {
      this.afAuth.authState.subscribe(auth => {
        if (auth !== undefined && auth !== null) {
          this.user = auth;
        }
        
      });
      this.data.currentMessage.subscribe(message => this.message = message);
      this.userName = this.data.getMessage();
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
        userName: this.userName,
        receiver: this.receiverName });
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
    sendReceiverName(rName:string){
      //get receiver's name from user list
      this.receiverName=rName;
      console.log("inside send receiver chat serviec");

    }

    editUser (newUser){
      this.userN.next(newUser);
    }
}
