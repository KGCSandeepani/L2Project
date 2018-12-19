import { Component, OnInit } from '@angular/core';
import { student } from '../Model/Student';
import { ReadUnamePswServiceService } from '../Services/read-uname-psw-service.service';
import { ChatServiceASService} from '../Services/chat-service-a-s.service';
import { MessageASComponent } from '../message-a-s/message-a-s.component';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  [x: string]: any;

  students: student[];
  constructor(private readService: ReadUnamePswServiceService, private chatService:ChatServiceASService,private router: Router) { }
  userN :string;
  editUser:string;
  ngOnInit() {
    this.readService.getData()
    .subscribe(data => this.students = data);
    console.log(this.students);

    //just to view clicked user
    this.chatService.cast.subscribe(userN=> this.userN=userN);
  }
  
   editTheUser(student:any){
    
     this.chatService.editUser(student.name);
     //this.router.navigate(['./feed/feed-a-s.component']);
     //this.router.navigate(['./feed']);
   }
}
