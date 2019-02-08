import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { DataPassService } from '../Services/data-pass.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-admin-view-company-feedback',
  templateUrl: './admin-view-company-feedback.component.html',
  styleUrls: ['./admin-view-company-feedback.component.css']
})
export class AdminViewCompanyFeedbackComponent implements OnInit {
  loger: string;// currently logged user
  items: Observable<any[]>;
  
  constructor(private db: AngularFireDatabase, 
    private data: DataPassService) { }

  ngOnInit() {
    this.loger = this.data.getMessage();
    console.log(this.loger+" inside res");
    this.items = this.db.list('companyFeedback', db => db.orderByChild("sender")).valueChanges();
  }

}
