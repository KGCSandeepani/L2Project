import { Component, OnInit } from '@angular/core';

import { ChatServiceASService} from '../Services/chat-service-a-s.service'

@Component({
  selector: 'app-chat-a-s',
  templateUrl: './chat-a-s.component.html',
  styleUrls: ['./chat-a-s.component.css']
})
export class ChatASComponent implements OnInit {
  
  message : string;
  constructor(private chat: ChatServiceASService) { }

  ngOnInit() {
  }

  send() {
    console.log("inside send");
    console.log(this.message);
    this.chat.sendMessage(this.message);
    
   
  }

  
  handleSubmit(event){
    if(event.keyCode == 13){
      this.send();
    }
  }

}

