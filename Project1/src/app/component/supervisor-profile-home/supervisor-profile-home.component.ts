import { Component, OnInit,OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CountNumberReqCompanyService } from 'src/app/component/Services/count-number-req-company.service';
import { DataPassService } from '../Services/data-pass.service';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { UserListService } from '../Services/user-list.service';

@Component({
  selector: 'app-supervisor-profile-home',
  templateUrl: './supervisor-profile-home.component.html',
  styleUrls: ['./supervisor-profile-home.component.css']
})
export class SupervisorProfileHomeComponent implements OnInit {
  value:string='';
  count:number=0;          
  loger: string ;
  msgCount: number = 0;
  //displayButton : boolean = false;
  message : string;
  currentUserAdmin: Observable<any>;
  currentUserRefAdmin: AngularFireList<any>
  constructor(private data : DataPassService,
              private getCount:CountNumberReqCompanyService,
              private route : ActivatedRoute,
              private router : Router, private db: AngularFireDatabase,private user: UserListService) { }

  ngOnInit() {
    this.getValue(); 
    this.msgNotification();
   //this.data.currentMessage.subscribe(message => this.message = message);
   this.loger = this.data.getMessage();
   /*if(this.data.getMessage()!=null)
     this.displayButton=true;
   else
     this.displayButton=false;*/
  }
  clearNotification() {
    //clear notification count of user
    console.log("insdie clear notification");
    this.msgCount = 0;
    this.user.clear();
  }
  logout(){
    sessionStorage.clear();
    //this.displayButton=false;
    this.router.navigate(['/login']);
    //location.reload();
  }

  getValue(){
    this.value = this.getCount.setDetails();
    console.log(this.value);
    this.count = +this.value;
    console.log(this.value);
    
  }

  clearValue(){
   this.getCount.clearDetails();
  }

  clearCount() {
    this.count = 0;
    console.log(this.count);
  }

  msgNotification() {
    this.loger = this.data.getMessage();
    console.log("loger"+this.loger)
    this.currentUserRefAdmin = this.db.list('userList', ref => ref.child(this.loger).orderByChild('readCount'));
    this.currentUserAdmin = this.currentUserRefAdmin.valueChanges();
    this.currentUserAdmin.subscribe(res => { this.msgCount = res[0];console.log("msgCount", res[0] ); });
  
  }


}
