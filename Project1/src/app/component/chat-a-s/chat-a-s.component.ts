import { Component, OnInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

import { ChatServiceASService} from '../Services/chat-service-a-s.service'

@Component({
  selector: 'app-chat-a-s',
  templateUrl: './chat-a-s.component.html',
  styleUrls: ['./chat-a-s.component.css']
})
export class ChatASComponent implements OnInit {
  
  message : string;
  constructor(private chat: ChatServiceASService,private _scrollToService: ScrollToService) { }

  ngOnInit() {
  }

  send() {
    console.log("inside send");
    console.log(this.message);
    this.chat.sendMessage(this.message);
    this.message="";

    // this.triggerScrollTo();
   
  }

  
  handleSubmit(event){
    if(event.keyCode == 13){
      this.send();
    }
  }
  public triggerScrollTo() {
    
    const config: ScrollToConfigOptions = {
      target: 'destination'
    };
 
    // this._scrollToService.scrollTo(config);
  }

}

