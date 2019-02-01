import { Component, OnInit } from '@angular/core';
import { AdminViewCompanyService } from 'src/app/component/Services/admin-view-company.service';
import { company } from 'src/app/component/Model/Company';
import { GetPresentBatchService } from '../Services/get-present-batch.service';
import { Batch } from '../Model/Batch';
import { ReadUnamePswServiceService } from '../Services/read-uname-psw-service.service';
import { student } from '../Model/Student';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  company: Array<company>=[];
  comCount= 0;
  batch: Batch[];
  maxBatch: number = 0;
  students: student[];
  stuCount: number = 0;

  constructor(private readCompanyService: AdminViewCompanyService, private getBatches: GetPresentBatchService, private readService: ReadUnamePswServiceService) { }

  ngOnInit() {

    this.readCompanyService.getData()
    .subscribe(data => {this.company = data;
      this.company.forEach(element => {
        if (element.doInternship) {
          this.comCount++;
        }
      });
    });

    this.getBatches.getAllData()
      .subscribe(data => {
        this.batch= data;
        this.batch.sort((a,b)=>b.batch-a.batch);
        this.maxBatch = this.batch[0].batch;
      });

      this.readService.getData()
      .subscribe(data => {this.students = data
        this.students.forEach(element => {
          if (element.availability) {
            this.stuCount++;
          }
        });
      });
      

  }

}
