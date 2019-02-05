import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import * as firebase from 'firebase/app';
import { DataPassService } from '../Services/data-pass.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastingMessagesService {
  user: firebase.User;
  loggedUser: string;
  userList: AngularFireList<any>;
  items: Observable<any[]>;
  constructor(private db: AngularFireDatabase, private dataPass: DataPassService) { }
  
  send(msg:string) {
      //add user to firebase user list
      this.loggedUser = this.dataPass.getMessage();
      this.userList = this.db.list('broadcast', ref => ref.orderByKey());
      this.userList.push({
        time: new Date().toString(),
        message: msg
       
      });
    }
    // getMessages(): AngularFireList<any> {

    //   return this.db.list('broadcast', ref => ref.orderByKey().limitToLast(25));
    // }
}
