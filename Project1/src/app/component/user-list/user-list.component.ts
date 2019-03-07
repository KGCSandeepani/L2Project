import { Component, OnInit } from '@angular/core';
import { student } from '../Model/Student';
import { staff } from '../Model/Staff';
import { admin } from '../Model/Admin';
import { ReadUnamePswServiceService } from '../Services/read-uname-psw-service.service';
import { ChatServiceASService } from '../Services/chat-service-a-s.service';
import { MessageASComponent } from '../message-a-s/message-a-s.component';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { AdminreadstaffService } from 'src/app/component/Services/adminreadstaff.service';
import { AdminViewCompanyService } from 'src/app/component/Services/admin-view-company.service';
import { company } from 'src/app/component/Model/Company';
import { ViewAdminsService } from '../Services/view-admins.service';
import { UserListService } from '../Services/user-list.service';
import * as firebase from 'firebase/app';
import { DataPassService } from '../Services/data-pass.service';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  [x: string]: any;
  loggedUser: string;

  //to get all users to list
  students: student[];
  supervisors: staff[];
  company: company[];
  admin: admin[];
  // items: string;
  user: Array<String> = [];
  userCount:Array<number>=[];
  i = 0;
  recepientMsgCount: number = 0;
  items: Observable<any[]>;
  userN: string;
  editUser: string;// to symbolize the change in user
loggerType:string;

currentUserAdmin: Observable<any>;
  currentUserRefAdmin: AngularFireList<any>

  constructor(private readServiceCompany: AdminViewCompanyService,
    private readService: ReadUnamePswServiceService, private readServiceStaff: AdminreadstaffService,
    private chatService: ChatServiceASService, private router: Router,private db: AngularFireDatabase,
    private readServiceAdmin: ViewAdminsService, private userList: UserListService,
    private data: DataPassService) {
    this.loggedUser = data.getMessage();
  }
  

  ngOnInit() {
    
    //just to view clicked user
    this.chatService.cast.subscribe(userN => this.userN = userN);
    this.loggerType=this.data.getString();
    // console.log(this.loggerType+" this.loggerType");

    this.getRecepient();
    
    this.readService.getData()
    .subscribe(data => this.students = data);

    this.readServiceStaff.getData()
      .subscribe(data => this.supervisors = data);
      this.readServiceCompany.getData()
      .subscribe(data => this.company = data);
      this.readServiceAdmin.getData()
      .subscribe(data => { this.admin = data; 
        // console.log(data + " is admin data");
       });
  }

  dummyMethod(){
    // this.recepientMsgCount=0;
  }

  editTheUser(student: any) {

    this.chatService.editUser(student);


  }

  getRecepient() {
    //view recepient list
   
    var ref = firebase.database().ref('userList');
    var userRef = ref.child(this.loggedUser).child('recepients');

    userRef.on('value', (snapshot) => {
      snapshot.forEach((child) => {
        
        // this.recepientMsgCount=child.val().read;
        if(this.user.indexOf(child.key)<0){
          this.user[this.i] = child.key;
          this.userCount[this.i]=child.val().read;
          this.i++;
        }

        
    
      
         console.log("intValusercount", this.userCount);
      })
    });

    
   
  }

  sendRec(student: any) {
    //send recepient to database
    // console.log(name+"  is cliked userrrr");
    // this.userlist.clearRecepientMsgCount();
    // this.userlist.clear();
    //to add clicked user to recepient list in db
    this.userList.sendRecepient(student.name);
    // this.userList.clear();
    // this.userList.clearRecepientMsgCount();
  }

  sendReceiver(name: string) {
    this.userList.getReceiver(name);
  }

}
