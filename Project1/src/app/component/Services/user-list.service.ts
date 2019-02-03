import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import * as firebase from 'firebase/app';
import { DataPassService } from '../Services/data-pass.service';
import { User } from '../Model/User.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  user: firebase.User;
  loggedUser: string;
  userList: AngularFireList<User>;
  items: Observable<any[]>;
  intVal;

  constructor(private db: AngularFireDatabase, private dataPass: DataPassService) {

  }
  ngOnInit() {

  }

  update() {
    //pop new notification at receiver's side when new msg arrives
    this.loggedUser = this.dataPass.getMessage();
    var refu = firebase.database().ref("userList").child(this.loggedUser);
    refu.update({ readCount: 1 });

    // ref.orderByChild("userList").equalTo(this.loggedUser).once("value", function (snapshot) {
    //   snapshot.forEach(function (user) {
    //     user.ref.update({ readCount: 1 });
    //   });
    // });

  }

  clear() {
    //clear the msg count
    this.loggedUser = this.dataPass.getMessage();
    var refc = firebase.database().ref("userList").child(this.loggedUser);
    refc.update({ readCount: 0 });

    //used to get data when firebase has its auto generated id
    // var ref = firebase.database().ref("userList");
    // ref.orderByChild("uid").equalTo(this.loggedUser).once("value", function (snapshot) {
    //   snapshot.forEach(function (user) {
    //     user.ref.update({ readCount: 0 });
    //   });
    // });
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

  sendUserWithCustomId(user: string) {
    // add user to firebase user list with Id of user
    this.loggedUser = this.dataPass.getMessage();
    var ref = firebase.database().ref("userList");

    ref.child(user).set({
      readCount: 0,
      status: true
    });
  }

  sendRecepient(user: string) {

    //add user to recepient list with Id of user
    
    this.loggedUser = this.dataPass.getMessage();
    var ref = firebase.database().ref('userList');
    var userRef = ref.child(this.loggedUser).child('recepients');

    userRef.child(user).set({
      read: 0
    });
  }
  
}


