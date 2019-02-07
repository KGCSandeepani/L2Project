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
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource;
  loger: string;// currently logged user
  items: Observable<any[]>;

  constructor(private db: AngularFireDatabase, 
    private data: DataPassService) {
      this.loger = this.data.getMessage();

     }

  ngOnInit() {
    this.loger = this.data.getMessage();
    console.log(this.loger+" inside res");
    this.db.list('feedback', db => db.orderByChild("supervisor").equalTo(this.loger)).
    valueChanges().subscribe(res => {this.dataSource = res;console.log(res+" inside res");} );

  }
 
  
  

}
