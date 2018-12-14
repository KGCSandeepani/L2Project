import { Component, OnInit , OnChanges} from '@angular/core';
import { ChatServiceASService} from '../Services/chat-service-a-s.service'
import { Observable } from 'rxjs';
import {ChatMessage} from '../Model/Chat-message.model';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"

@Component({
  selector: 'app-feed-a-s',
  templateUrl: './feed-a-s.component.html',
  styleUrls: ['./feed-a-s.component.css']
  
})
export class FeedASComponent implements OnInit , OnChanges{
  feeds:AngularFireList<any>
  ChatMessage : any[];
  userN :string;
  items: Observable<any[]>;
  
  constructor(private chat : ChatServiceASService,private db: AngularFireDatabase ) { 
    //this.feed = db.list('/chat-a-s.component');
    this.items = db.list('messages').valueChanges();
  }

  ngOnInit() {
    console.log("intializing feed oninit...");
    //this.chat.getMessages();
    //this.feeds=this.db.list('messages',ref => ref.orderByKey().limitToLast(25));
    this.chat.cast.subscribe(userN=> this.userN=userN);
    console.log("after feed oninit..."+this.userN);
    this.items = this.db.list('messages',db => db.orderByChild("receiver").equalTo(this.userN)).valueChanges();
    
  }

  ngOnChanges() {
    
    console.log("after feed onchanges..."+this.userN);
    this.items = this.db.list('messages',db => db.orderByChild("receiver").equalTo('164124V')).valueChanges();
    
  }

  

}
