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
  sendRece: string;
  receiver: string;
  receiverU: string;
  logerType: string; // currently logged user type
  //for comparing two student numbers
  num1: Number;
  num2: Number;
  value1: string;
  value2: string;

  key: string;

  users: Array<String> = [];
  i = 0;
  constructor(private db: AngularFireDatabase, private dataPass: DataPassService) {

  }
  ngOnInit() {

  }
  getReceiver(user: string) {
    this.receiverU = user;
  }

  sendReceiver() {
    return this.receiverU;
  }
  update() {
    //pop new notification at receiver's side when new msg arrives

    this.loggedUser = this.dataPass.getMessage();
    var refU = firebase.database().ref("userList").child(this.receiverU);
    refU.update({ readCount: 1 });
    console.log("inside update");

    refU.child('recepients').child(this.loggedUser).update({ read: 1 });
    // ref.orderByChild("userList").equalTo(this.loggedUser).once("value", function (snapshot) {
    //   snapshot.forEach(function (user) {
    //     user.ref.update({ readCount: 1 });
    //   });
    // });

  }
  // clikedUser(name:string){

  // }

  clear() {
    //clear the msg count
    this.loggedUser = this.dataPass.getMessage();
    var refC = firebase.database().ref("userList").child(this.loggedUser);
    refC.update({ readCount: 0 });

    //used to get data when firebase has its auto generated id
    // var ref = firebase.database().ref("userList");
    // ref.orderByChild("uid").equalTo(this.loggedUser).once("value", function (snapshot) {
    //   snapshot.forEach(function (user) {
    //     user.ref.update({ readCount: 0 });
    //   });
    // });
  }

  delete(userN: string) {
    this.logerType = this.dataPass.getString();
    this.loggedUser = this.dataPass.getMessage();
   

    //generating a comman tag from sender name and receiver name
    if (this.getLoggedUserType(this.loggedUser) == "Admin" && this.getClickedUserType(userN) == "Student") {
      this.sendRece = this.loggedUser + "_" + userN;

      var ref = firebase.database().ref('messages');
      ref.orderByChild("senderReceiver").equalTo(this.sendRece).once("value", function (snapshot) {
        snapshot.forEach(function (user) {
          console.log(user.key + " keyy");
          var refC = firebase.database().ref('/messages/' + user.key);

          refC.remove();

        });
      });

    }

    else if (this.logerType == "Supervisor" && this.getClickedUserType(userN) == "Student") {
      this.sendRece = this.loggedUser + "_" + userN;

      var ref = firebase.database().ref('messages');
      ref.orderByChild("senderReceiver").equalTo(this.sendRece).once("value", function (snapshot) {
        snapshot.forEach(function (user) {
          console.log(user.key + " keyy");
          var refC = firebase.database().ref('/messages/' + user.key);

          refC.remove();

        });
      });

    }
    else if ((this.logerType == "Student" && this.getClickedUserType(userN) == "Student") &&
      this.compareTwoIndexNumbers(this.loggedUser, userN)) {
      this.sendRece = this.loggedUser + "_" + userN;

      var ref = firebase.database().ref('messages');
      ref.orderByChild("senderReceiver").equalTo(this.sendRece).once("value", function (snapshot) {
        snapshot.forEach(function (user) {
          console.log(user.key + " keyy");
          var refC = firebase.database().ref('/messages/' + user.key);

          refC.remove();

        });
      });

    }
    else {

      this.sendRece = userN + "_" + this.loggedUser;

      var ref = firebase.database().ref('messages');
      ref.orderByChild("senderReceiver").equalTo(this.sendRece).once("value", function (snapshot) {
        snapshot.forEach(function (user) {
          console.log(user.key + " keyy");
          var refC = firebase.database().ref('/messages/' + user.key);

          refC.remove();

        });
      });

    }

  }
  getLoggedUserType(name: string) {
    if (this.loggedUser == "Admin") {
      return "Admin";
    }
    return "Student";
  }
  getClickedUserType(name: string) {
    if (name == "Admin") {
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

  clearRecepientMsgCount() {
    //clear the msg count
    this.loggedUser = this.dataPass.getMessage();
    var refC = firebase.database().ref("userList").child(this.loggedUser);
    refC.child('recepients').child(this.receiverU).update({ read: 0 });

    //used to get data when firebase has its auto generated id
    // var ref = firebase.database().ref("userList");
    // ref.orderByChild("uid").equalTo(this.loggedUser).once("value", function (snapshot) {
    //   snapshot.forEach(function (user) {
    //     user.ref.update({ readCount: 0 });
    //   });
    // });
  }


  // sendUser() {
  //   //add user to firebase user list
  //   this.loggedUser = this.dataPass.getMessage();
  //   this.userList = this.db.list('userList', ref => ref.orderByKey());
  //   this.userList.push({
  //     uid: this.loggedUser,
  //     readCount: 0,
  //     status: true
  //   });
  // }

  sendUserWithCustomId(user: string, typeU: string) {
    // add user to firebase user list with Id of user
    this.loggedUser = this.dataPass.getMessage();
    var ref = firebase.database().ref("userList");

    ref.child(user).set({
      recepients: true,
      readCount: 0,
      status: true,
      type: typeU,
    });
  }

  sendRecepient(user: string) {

    //add user to recepient list with Id of user
    this.receiver = user;
    this.loggedUser = this.dataPass.getMessage();
    var ref = firebase.database().ref('userList');

    //add recepient to sender's userList
    var userRef = ref.child(this.loggedUser).child('recepients');

    userRef.child(user).set({
      read: 0
    });

    //add sender to recepient's userlist
    var userRef = ref.child(user).child('recepients');

    userRef.child(this.loggedUser).set({
      read: 0
    });
  }


}


