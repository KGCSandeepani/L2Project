import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CountNumberReqCompanyService } from 'src/app/component/Services/count-number-req-company.service';
import { DataPassService } from '../Services/data-pass.service';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { User } from '../Model/User.model';
import { UserListService } from '../Services/user-list.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  constructor(private data: DataPassService, private getCount: CountNumberReqCompanyService,
    private route: ActivatedRoute, private router: Router, private db: AngularFireDatabase,
    private user: UserListService) { }

  value: string = '';
  count: number = 0;
  msgCount: number = 0;
  loger: string;
  //displayButton : boolean = false;
  currentUserAdmin: Observable<any>;
  currentUserRefAdmin: AngularFireList<any>
  message: string;
  loggedUser: string;
  ngOnInit() {

    this.getValue();
    //this.data.currentMessage.subscribe(message => this.message = message);

    /*if(this.data.getMessage()!=null)
      this.displayButton=true;
    else
      this.displayButton=false;*/
    this.loger = this.data.getMessage();
    // const _this = this;
    this.currentUserRefAdmin = this.db.list('userList', ref => ref.limitToLast(1).orderByChild('uid').equalTo(this.loger));
    this.currentUserAdmin = this.currentUserRefAdmin.valueChanges();
    this.currentUserAdmin.subscribe(res => { this.msgCount = res[0].readCount; });
    // console.log(snapshot.key.readCount);

  }
  // ngOnChanges(){
  //   this.loger = this.data.getMessage();
  //   this.currentUserRef = this.db.list('userList', ref => ref.limitToLast(1).orderByChild('uid').equalTo(this.loger));
  //   this.currentUser = this.currentUserRef.valueChanges();
  //   this.currentUser.subscribe(res=>{this.msgCount=res[0].readCount;});
  // }
  clearNotification() {
    console.log("inside clear notificatio");
    this.msgCount = 0;
    this.user.clear();
  }
  logout() {
    sessionStorage.clear();
    //this.displayButton=false;
    this.router.navigate(['/login']);
    //location.reload();
  }

  getValue() {
    this.value = this.getCount.setDetails();
    console.log(this.value);
    this.count = +this.value;
    console.log(this.value);

  }

  clearValue() {
    this.getCount.clearDetails();

  }

  addStudent() {
    this.router.navigate(['adminAddStudent'], { relativeTo: this.route });
  }

  clearCount() {
    this.count = 0;
    console.log(this.count);
  }

}
