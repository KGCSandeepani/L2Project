import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import * as firebase from 'firebase/app';
import { DataPassService } from '../Services/data-pass.service';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { User } from '../Model/User.model';
import { balancePreviousStylesIntoKeyframes } from '@angular/animations/browser/src/util';
@Injectable({
  providedIn: 'root'
})
export class UserListService {
  user: firebase.User;
  loggedUser: string;
  updateUser: User;
  userR: string = '';
  $key: string;
  userS: Observable<any>;
  userList: AngularFireList<User>;
  chatListUserType: string; // clicked user type from userlist
  private userN = new BehaviorSubject<string>(this.userR);
  cast = this.userN.asObservable();
  currentUser: Observable<any>;
  currentUserRef: AngularFireList<any>
  currentUserUpdate: Observable<any>;
  currentUserRefUpdate: AngularFireList<any>
  currentUserClear: Observable<any>;
  currentUserRefClear: AngularFireList<any>

  constructor(private db: AngularFireDatabase, private dataPass: DataPassService) {
    // this.data.currentMessage.subscribe(message => this.message = message);
    // this.senderName = this.data.getMessage();
    // this.cast.subscribe(userN => this.userR = userN);
  }
  ngOnInit() {

  }

  update() {
    this.loggedUser = this.dataPass.getMessage();
    // const _this = this;
    var ref = firebase.database().ref("userList");
    ref.orderByChild("uid").equalTo(this.loggedUser).once("value", function (snapshot) {
      snapshot.forEach(function (user) {
        user.ref.update({ readCount: 1 });
      });
    });
    // this.currentUserRef = this.db.list('userList', ref => ref.limitToLast(1).orderByChild('uid').equalTo(this.loggedUser));
    // this.currentUser = this.currentUserRef.snapshotChanges();
    // this.currentUser.subscribe(snapshots => {
    //   snapshots.forEach(snapshot => {
    //     this.$key = snapshot.key;
    //     if (action == "update") {
    //       this.updateReadCount(snapshot.key);
    //       console.log(+"ïnside update snap===");
    //       this.currentUserRef.update(snapshot.key, { readCount: (1) });
    //     } else {
    //       this.clear(snapshot.key);
    //       this.currentUserRef.update(this.$key, { readCount: (0) });

    //       console.log(+"ïnside clear snap===");
    //     }

    //   });
    // })
    // console.log(this.$key + "ïnside get msg===");

  }
  
  clear() {
    this.loggedUser = this.dataPass.getMessage();
    // const _this = this;
    var ref = firebase.database().ref("userList");
    ref.orderByChild("uid").equalTo(this.loggedUser).once("value", function (snapshot) {
      snapshot.forEach(function (user) {
        user.ref.update({ readCount: 0 });
      });
    });
  }
  // updateReadCount(dbKey:string) {
  //   this.loggedUser = this.dataPass.getMessage();

  //   this.currentUserRefUpdate = this.db.list('userList', ref => ref.limitToLast(1).equalTo(this.loggedUser));
  //   this.currentUserRefUpdate.update(dbKey, { readCount: (1) });
  //   console.log("ïnside get update read count===");
  // }

  // clear(name: string) {
  //   this.loggedUser = this.dataPass.getMessage();
  //   this.$key = name;
  //   // console.log(this.$key);
  //   this.currentUserRefClear = this.db.list('userList', ref => ref.limitToLast(1).orderByChild('uid').equalTo(this.loggedUser));
  //   this.currentUserRefClear.update(this.$key, { readCount: (0) });
  //   console.log("ïnside get clear count===");
  // }

  // sendUser() {
  //   this.loggedUser = this.dataPass.getMessage();
  //   // this.userList = this.db.list('userList', ref => ref.orderByKey());
  //   this.currentUserRef = this.db.list('userList', ref => ref.limitToLast(1).orderByChild('uid').equalTo(this.loggedUser));
  //   this.currentUserRef.set()
  //   this.userList.child().push({
  //     uid: this.loggedUser,
  //     readCount: 0,
  //     status: true

  //   });


  // }



  // clearReadCount() {
  //   this.loggedUser = this.dataPass.getMessage();
  //   // const _this = this;
  //   this.currentUserRef = this.db.list('userList', ref => ref.limitToLast(1));
  //   this.currentUser = this.currentUserRef.snapshotChanges();
  //   this.currentUser.subscribe(snapshots => {
  //     snapshots.forEach(snapshot => {
  //       this.$key = snapshot.key;
  //       this.clear(snapshot.key);
  //       console.log("ïnside get clear read count===");
  //     });
  //   })
  // }




}
