import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { DataPassService } from '../Services/data-pass.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-supervisor-view-feedback',
  templateUrl: './supervisor-view-feedback.component.html',
  styleUrls: ['./supervisor-view-feedback.component.css']
})
export class SupervisorViewFeedbackComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource;
  loger: string;// currently logged user
  items: Observable<any[]>;

  constructor(private db: AngularFireDatabase, 
    private data: DataPassService) {
      this.loger = this.data.getMessage();

     }

  ngOnInit() {
    this.loger = this.data.getMessage();
    this.db.list('feedback', db => db.orderByChild("name").equalTo(this.loger)).valueChanges().subscribe(res => {this.dataSource = res;console.log(res);} );

  }
 
  
  

}
