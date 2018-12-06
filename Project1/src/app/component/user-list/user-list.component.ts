import { Component, OnInit } from '@angular/core';
import { student } from '../Model/Student';
import { ReadUnamePswServiceService } from '../Services/read-uname-psw-service.service';
import { ChatServiceASService} from '../Services/chat-service-a-s.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  [x: string]: any;

  students: student[];
  constructor(private readService: ReadUnamePswServiceService, private chatService:ChatServiceASService) { }

  ngOnInit() {
    this.readService.getData()
    .subscribe(data => this.students = data);
    console.log(this.students);
  }
  sendReceiverName(student:any){
    
    console.log("value", student.name);
    this.chatService.sendReceiverName(student.name);
    
  }
  
}
