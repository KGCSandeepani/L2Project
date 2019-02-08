import { Component, OnInit } from '@angular/core';
import { ChatServiceASService } from '../Services/chat-service-a-s.service'
import { UserListService } from '../Services/user-list.service'

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {
  userName:string="";

  constructor(private userlist: UserListService,private chat: ChatServiceASService) { }

  ngOnInit() {
    this.userName=this.userlist.sendReceiver();
    this.chat.cast.subscribe((userN) => {
      this.userName = userN;

    // this.userlist.sendUser("Admin");// send currentlt logged in user to db
    // this.users=this.userlist.getMessages().valueChanges();// get that returned value
  });
  }
  delete(receiver:string){
    this.userlist.delete(receiver);
  }

}
