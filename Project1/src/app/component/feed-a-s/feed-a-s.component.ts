import { Component, OnInit , OnChanges, SimpleChange, Input} from '@angular/core';
import { ChatServiceASService} from '../Services/chat-service-a-s.service'
import { Observable } from 'rxjs';
import {ChatMessage} from '../Model/Chat-message.model';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { DoCheck, KeyValueDiffers, KeyValueDiffer } from '@angular/core';
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
 
  constructor(private chat : ChatServiceASService,private db: AngularFireDatabase,private differs: KeyValueDiffers ) { 
    //this.feed = db.list('/chat-a-s.component');
    //this.items = db.list('messages').valueChanges();
    this.chat.cast.subscribe(userN=> this.userN=userN);
    //this.items = this.db.list('messages',db => db.orderByChild("receiver").equalTo(this.userN)).valueChanges();
    this.differ = this.differs.find({}).create(); 
    //this.viewMessage();
    
  }

  ngOnInit() {
    //console.log("intializing feed oninit...");
    //this.chat.getMessages();
    //this.feeds=this.db.list('messages',ref => ref.orderByKey().limitToLast(25));
    //this.chat.cast.subscribe(userN=> this.userN=userN);
    //this.items = this.db.list('messages',db => db.orderByChild("receiver").equalTo(this.userN)).valueChanges();
    
    //this.items=this.chat.getMessages2();
    
    
  }

  ngOnChanges() {
    
    //console.log("after feed onchanges..."+this.userN);
    //this.items = this.db.list('messages',db => db.orderByChild("receiver").equalTo(this.userN)).valueChanges();
    //this.items=this.chat.getMessages2();
    
  }
  /*viewMessage(){
    console.log("view msg"+this.userN);
    this.items = this.db.list('messages',db => db.orderByChild("receiver").equalTo('164124V')).valueChanges();
  }*/

  /*ngDoCheck() {
    const change = this.differ.diff(this);
    if (change) {
      change.forEachChangedItem(item => {
        console.log('item changed', item);
        this.items = this.db.list('messages',db => db.orderByChild("receiver").equalTo(this.userN)).valueChanges();
    
      });
    }
  }*/

}
