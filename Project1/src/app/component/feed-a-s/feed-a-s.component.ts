import { Component, OnInit , OnChanges, SimpleChange, Input} from '@angular/core';
import { ChatServiceASService} from '../Services/chat-service-a-s.service'
import { Observable } from 'rxjs';
import {ChatMessage} from '../Model/Chat-message.model';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { DoCheck, KeyValueDiffers, KeyValueDiffer } from '@angular/core';
import { stringify } from '@angular/core/src/util';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { AfterViewChecked, ElementRef, ViewChild} from '@angular/core'
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
  @ViewChild('scrollBottom') private scrollBottom: ElementRef;
  
  constructor(private chat : ChatServiceASService,private db: AngularFireDatabase,private _scrollToService: ScrollToService ) { 
    
       
  }

  ngOnInit()  {
    
    this.viewMessage();
    this.scrollToBottom();
    window.scrollTo(0,document.body.scrollHeight);
  }

  ngOnChanges() {
    
    this.chat.cast.subscribe((userN) => {
      this.userN=userN;
      
    this.items = this.db.list('messages',db => db.orderByChild("receiver").equalTo(this.userN)).valueChanges();
    this.scrollToBottom();
    });;
    window.scrollTo(0,document.body.scrollHeight);
  }
  viewMessage(){
   
    this.chat.cast.subscribe((userN) => {
      this.userN=userN;
      
    this.items = this.db.list('messages',db => db.orderByChild("receiver").equalTo(this.userN)).valueChanges();
  
    });
    
    this.scrollToBottom();
    window.scrollTo(0,document.body.scrollHeight);
    }
    // public triggerScrollTo() {
    
    //   const config: ScrollToConfigOptions = {
    //     target: 'destination'
    //   };
   
    //   this._scrollToService.scrollTo(config);
    // }
   
    scrollToBottom(): void {
      try {
          this.scrollBottom.nativeElement.scrollTop = this.scrollBottom.nativeElement.scrollHeight;
      } catch(err) { }
  }
    
  

}
