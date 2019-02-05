import { Component, OnInit } from '@angular/core';
import { AdminViewCompanyService } from 'src/app/component/Services/admin-view-company.service';
import { company } from 'src/app/component/Model/Company';
import { GetPresentBatchService } from '../Services/get-present-batch.service';
import { Batch } from '../Model/Batch';
import { ReadUnamePswServiceService } from '../Services/read-uname-psw-service.service';
import { student } from '../Model/Student';
import { ChatServiceASService } from '../Services/chat-service-a-s.service'
import { BroadcastingMessagesService} from '../Services/broadcasting-messages.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
  constructor(private broadcasting:BroadcastingMessagesService,private readCompanyService: AdminViewCompanyService, private getBatches: GetPresentBatchService, private readService: ReadUnamePswServiceService) { }

  ngOnInit() {

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

      this.presentageCompamy = this.comCount/this.allCompany*100;
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
        this.presentageCVUpload = this.cvUploadedCount/this.allStudent*100;
        this.selectedStudent = (this.allStudent - this.stuCount)/this.allStudent*100;
      });
      

  }
  // send() {
   
  //   this.broadcasting.send(this.message);
  //   this.message = "";
   
  // }

}
