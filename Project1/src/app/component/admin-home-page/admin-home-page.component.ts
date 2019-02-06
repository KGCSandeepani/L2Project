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
import { CompanySignupService } from 'src/app/component/Services/company-signup.service';
import { company } from 'src/app/component/Model/Company';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})

export class AdminHomePageComponent implements OnInit {
  constructor(private data: DataPassService, private getCount: CountNumberReqCompanyService,
    private route: ActivatedRoute, private router: Router, private db: AngularFireDatabase,
    private user: UserListService, private readService: CompanySignupService) { }

  value: string = '';
  count: number = 0;
  msgCount: number = 0;
  loger: string;
  i = 0;
  currentUserAdmin: Observable<any>;
  currentUserRefAdmin: AngularFireList<any>
  message: string;
  loggedUser: string;
  company: company[];
  com: Array<company> = [];

  ngOnInit() {
    this.loger = this.data.getMessage();
    this.getReqComCount();
    this.msgNotification();
    //this.getValue();
    //this.data.currentMessage.subscribe(message => this.message = message);

    /*if(this.data.getMessage()!=null)
      this.displayButton=true;
    else
      this.displayButton=false;*/
    }
    
 
  msgNotification() {
    this.loger = this.data.getMessage();
    console.log("loger"+this.loger)
    this.currentUserRefAdmin = this.db.list('userList', ref => ref.child(this.loger).orderByChild('readCount'));
    this.currentUserAdmin = this.currentUserRefAdmin.valueChanges();
    this.currentUserAdmin.subscribe(res => { this.msgCount = res[0];console.log("msgCount", res[0] ); });
  
  }

  clearNotification() {
    //clear notification count of user
    console.log("insdie clear notification");
    this.msgCount = 0;
    this.user.clear();
  }
  logout() {
    sessionStorage.clear();
    //this.displayButton=false;
    this.router.navigate(['/login']);
    //location.reload();
  }

  /* getValue() {
     this.value = this.getCount.setDetails();
     // console.log(this.value);
     this.count = +this.value;
     // console.log(this.value);
 
   }
   clearValue() {
     this.getCount.clearDetails();
 
   }*/

  addStudent() {
    this.router.navigate(['adminAddStudent'], { relativeTo: this.route });
  }

  clearCount() {
    this.count = 0;
    // console.log(this.count);
  }

  getReqComCount() {

    this.readService.getData()
      .subscribe(data => {
      this.company = data;
        this.company.forEach(element => {
          this.com[this.i] = element;
          this.i++;
        });
        this.count = this.com.length;
        // console.log(this.com.length+"in");
      });
  }

}
