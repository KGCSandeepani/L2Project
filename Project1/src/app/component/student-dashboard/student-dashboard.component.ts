import { Component, OnInit } from '@angular/core';
import { AdminViewCompanyService } from 'src/app/component/Services/admin-view-company.service';
import { company } from 'src/app/component/Model/Company';
import { GetPresentBatchService } from '../Services/get-present-batch.service';
import { Batch } from '../Model/Batch';
import { ReadUnamePswServiceService } from '../Services/read-uname-psw-service.service';
import { student } from '../Model/Student';
import { ChatServiceASService } from '../Services/chat-service-a-s.service'
import { BroadcastingMessagesService} from '../Services/broadcasting-messages.service'
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"
import { DataPassService } from '../Services/data-pass.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  company: Array<company>=[];
  comCount: number= 0;
  allCompany: number =0 ;
  batch: Batch[];
  maxBatch: number = 0;
  students: student[];
  stuCount: number = 0;
  cvUploadedCount: number = 0;
  allStudent: number = 0;
  presentageCVUpload: number = 0 ;
  selectedStudent: number = 0;
  presentageCompamy: number = 0;
  companyList : Array<company>=[];
  i: number=0;
  message:string
  loger: string;// currently logged user
  items: Observable<any[]>;
  dataSource;
  selectedStu: number;
  logger: string ;
  presentageComp;
  presentageCVU;
  presentageStu;

  constructor(private readCompanyService: AdminViewCompanyService, 
    private getBatches: GetPresentBatchService, private readService: ReadUnamePswServiceService,
    private db: AngularFireDatabase, 
    private data: DataPassService) { }

  ngOnInit() {

    this.logger = this.data.getMessage();
    this.items = this.db.list('broadcast', db => db.orderByChild("time")).valueChanges();

    // this.db.list('broadcast', db => db.orderByChild("time")).valueChanges().
    // subscribe(res => {this.dataSource = res;console.log(res);} );

    this.readCompanyService.getData()
    .subscribe(data => {this.company = data;
      this.allCompany = this.company.length;

      this.company.forEach(element => {
        if (element.doInternship) {
          this.comCount++;
        }
      });

      this.company.forEach(element => {
        if (element.doInternship && this.i<=6) {          
          this.companyList[this.i] = element;
          this.i++;
        }
      });

      this.presentageCompamy = this.comCount/this.allCompany*100>=0 ?this.comCount/this.allCompany*100 : 0;
      this.presentageComp = this.presentageCompamy.toFixed();
    });

    this.getBatches.getAllData()
      .subscribe(data => {
        this.batch= data;
        this.batch.sort((a,b)=>b.batch-a.batch);
        this.maxBatch = this.batch[0].batch;
      });

      this.readService.getData()
      .subscribe(data => {this.students = data;
        
        this.students.forEach(element => {

          if(element.batch==this.maxBatch){
            this.allStudent++;
            if (element.availability) {
              this.stuCount++;
            }
            if (element.uploadPdfUrl!=null) {
              this.cvUploadedCount++;
            }
          }          
          
        });
        this.presentageCVUpload = this.cvUploadedCount/this.allStudent*100>=0 ? this.cvUploadedCount/this.allStudent*100 : 0;
        this.presentageCVU = this.presentageCVUpload.toFixed();
        this.selectedStudent = (this.allStudent - this.stuCount)/this.allStudent*100>=0 ? (this.allStudent - this.stuCount)/this.allStudent*100 : 0;
        this.presentageStu = this.selectedStudent.toFixed();
        this.selectedStu = this.allStudent - this.stuCount;
      });
      
  }

}
