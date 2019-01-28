import { Component, OnInit , OnChanges, SimpleChange, Input} from '@angular/core';
import { ChatServiceASService} from '../Services/chat-service-a-s.service'
import { Observable } from 'rxjs';
import {ChatMessage} from '../Model/Chat-message.model';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { DoCheck, KeyValueDiffers, KeyValueDiffer } from '@angular/core';
import { stringify } from '@angular/core/src/util';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

import { DataPassService } from '../Services/data-pass.service';
@Component({
  selector: 'app-feed-a-s',
  templateUrl: './feed-a-s.component.html',
  styleUrls: ['./feed-a-s.component.css']
  
})
export class FeedASComponent implements OnInit , OnChanges {
  feeds:AngularFireList<any>
  ChatMessage : any[];
  differ: any;
  userN :string;
  items: Observable<any[]>;
  value:string='';
  loger: string ;
  
  constructor(private chat : ChatServiceASService,private db: AngularFireDatabase,private data : DataPassService,private _scrollToService: ScrollToService ) { 
    
       
  }

  ngOnInit()  {
    
    this.viewMessage();
    
  }

  ngOnChanges() {
    this.loger = this.data.getMessage();
    this.chat.cast.subscribe((userN) => {
      this.userN=userN;
      
    // this.items = this.db.list('messages',db => db.orderByChild("senderReceiver").equalTo(this.loger +"_"+this.userN)).valueChanges();
    this.items = this.db.list('messages',db => db.orderByChild("receiver").equalTo(this.userN)).valueChanges();
   
    });;
    // window.scrollTo(0,document.body.scrollHeight);
  }
  viewMessage(){
   
    this.chat.cast.subscribe((userN) => {
      this.userN=userN;
      this.loger = this.data.getMessage();
     console.log(this.userN); 
     console.log(this.loger); 
    this.items = this.db.list('messages',db => db.orderByChild("receiver").equalTo(this.userN)).valueChanges();
  
    });
    
    
    }
    // public triggerScrollTo() {
    
    //   const config: ScrollToConfigOptions = {
    //     target: 'destination'
    //   };
   
    //   this._scrollToService.scrollTo(config);
    // }
   
  //   scrollToBottom(): void {
  //     try {
  //         this.scrollBottom.nativeElement.scrollTop = this.scrollBottom.nativeElement.scrollHeight;
  //     } catch(err) { }
  // }
    
  

}
