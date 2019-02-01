import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import * as firebase from 'firebase/app';
import { DataPassService } from '../Services/data-pass.service';
import { User } from '../Model/User.model';
@Injectable({
  providedIn: 'root'
})
export class UserListService {
  user: firebase.User;
  loggedUser: string;
  userList: AngularFireList<User>;


  constructor(private db: AngularFireDatabase, private dataPass: DataPassService) {

  }
  ngOnInit() {

  }

  update() {
    //pop new notification at receiver's side when new msg arrives
    this.loggedUser = this.dataPass.getMessage();
    var ref = firebase.database().ref("userList");
    ref.orderByChild("uid").equalTo(this.loggedUser).once("value", function (snapshot) {
      snapshot.forEach(function (user) {
        user.ref.update({ readCount: 1 });
      });
    });

  }

  clear() {
    //clear the msg count
    this.loggedUser = this.dataPass.getMessage();
    var ref = firebase.database().ref("userList");
    ref.orderByChild("uid").equalTo(this.loggedUser).once("value", function (snapshot) {
      snapshot.forEach(function (user) {
        user.ref.update({ readCount: 0 });
      });
    });
  }


  sendUser() {
    //add user to firebase user list
    this.loggedUser = this.dataPass.getMessage();
    this.userList = this.db.list('userList', ref => ref.orderByKey());
    this.userList.push({
      uid: this.loggedUser,
      readCount: 0,
      status: true

    });


  }

}

