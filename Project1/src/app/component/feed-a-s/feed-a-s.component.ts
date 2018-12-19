import { Component, OnInit , OnChanges, SimpleChange, Input} from '@angular/core';
import { ChatServiceASService} from '../Services/chat-service-a-s.service'
import { Observable } from 'rxjs';
import {ChatMessage} from '../Model/Chat-message.model';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { DoCheck, KeyValueDiffers, KeyValueDiffer } from '@angular/core';
import { stringify } from '@angular/core/src/util';
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
  constructor(private chat : ChatServiceASService,private db: AngularFireDatabase,private differs: KeyValueDiffers ) { 
    //this.feed = db.list('/chat-a-s.component');
    //this.items = db.list('messages').valueChanges();
    this.chat.cast.subscribe(userN=> this.userN=userN);
   
    
    //this.items = this.db.list('messages',db => db.orderByChild("receiver").equalTo(this.userN)).valueChanges();
    this.differ = this.differs.find({}).create(); 
    //this.viewMessage();
    
  }

  ngOnInit() {
    
    this.chat.cast.subscribe(userN=> this.userN=userN);
    //console.log("intializing feed oninit...");
    
    //console.log("before feed oninit..."+this.userN);
    //this.items = this.db.list('messages',db => db.orderByChild("receiver").equalTo(this.userN)).valueChanges();
    this.viewMessage();
    //this.items=this.chat.getMessages2();
    
    
  }

  ngOnChanges() {
    
    this.chat.cast.subscribe((userN) => {
      this.userN=userN;
      console.log("Subscription got", this.userN); // Subscription got b, 
                                              // ^ This would not happen 
                                              // for a generic observable 
                                              // or generic subject by default
    this.items = this.db.list('messages',db => db.orderByChild("receiver").equalTo(this.userN)).valueChanges();
  
    });;
    
  }
  viewMessage(){
   
    this.chat.cast.subscribe((userN) => {
      this.userN=userN;
      console.log("Subscription got", this.userN); // Subscription got b, 
                                              // ^ This would not happen 
                                              // for a generic observable 
                                              // or generic subject by default
    this.items = this.db.list('messages',db => db.orderByChild("receiver").equalTo(this.userN)).valueChanges();
  
    });
    console.log("view msg"+this.value);
    }

  

}
