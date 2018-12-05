import { Component, OnInit, Input } from '@angular/core';
import {ChatMessage} from '../Model/Chat-message.model';
import { ChatServiceASService} from '../Services/chat-service-a-s.service';
import{ AuthChatASService} from '../Services/auth-chat-a-s.service';

@Component({
  selector: 'app-message-a-s',
  templateUrl: './message-a-s.component.html',
  styleUrls: ['./message-a-s.component.css']
})
export class MessageASComponent implements OnInit {
  @Input() chatMessage: ChatMessage;
  receiver: string;
  userName: string;
  messageContent: string;
  timeStamp: Date = new Date();
  isOwnMessage: true;
  ownEmail: string;

  constructor() { }

  ngOnInit(chatMessage = this.chatMessage) {
    this.userName = chatMessage.userName;
    this.messageContent = chatMessage.message;
    //this.timeStamp = chatMessage.timeSent;
    this.receiver = chatMessage.receiver;
    
  }

}
