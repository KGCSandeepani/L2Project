import { Component, OnInit } from '@angular/core';
import { AdminChangeNoOfCompanyService } from '../Services/admin-change-no-of-company.service';
import { NoOfCompany } from 'src/app/component/Model/NoOfCompany';
import { AdminAddBatchService } from '../Services/admin-add-batch.service';
import { Batch } from 'src/app/component/Model/Batch';
import { AdminUpdateEnableBatchService } from '../Services/admin-update-enable-batch.service';
import { GetPresentBatchService } from '../Services/get-present-batch.service';
import { NgxNotificationService } from 'ngx-notification';
import { GetNoOfCompanyService } from '../Services/get-no-of-company.service';

@Component({
  selector: 'app-admin-setting',
  templateUrl: './admin-setting.component.html',
  styleUrls: ['./admin-setting.component.css']
})
export class AdminSettingComponent implements OnInit {

  noOfCompany :NoOfCompany;
  amount : any;
  batch: any;
  startDate;
  endDate;
  enability;
  enable = true;
  selectedbutton ;
  batches : Array<Batch> =[];
  num : number;

  constructor(private changeAmount : AdminChangeNoOfCompanyService, private addBatchService: AdminAddBatchService,
    private enableBatchService: AdminUpdateEnableBatchService, private getBatches: GetPresentBatchService,
    private ngxNotificationService: NgxNotificationService, private getNoOfCompany : GetNoOfCompanyService) { }

  ngOnInit() {
    this.getBatches.getAllData()
    .subscribe(data => {
      this.batches= data;
      this.batches.sort((a,b)=>b.batch-a.batch);
      //console.log("ng : "+ this.enable+" : "+ this.batches[0].batch);
      if (this.batches[0].enable!=null) {
        this.selectedbutton= this.batches[0].enable;
      }
    });

    this.getNoOfCompany.getData()
      .subscribe(data => {this.noOfCompany = data;
      this.num=this.noOfCompany.amount;
     console.log("num "+this.num);
    },error => {
      console.log("error "+this.num + " : " + error);      
    });
  }

  changeCompany(a:number){
    console.log(a);
    if(a == null){
      this.sendNotification2();
      return;
    }
    this.changeAmount.getAmount(a)
    .subscribe( (data : NoOfCompany) =>{
      this.noOfCompany = data;
      this.amount='';
      this.sendNotification();
      this.ngOnInit();
    },errror => {
      this.sendNotification1();
    })
  }

  insertBatch(batch, startDate, endDate){
    //console.log(batch +" : "+ startDate +" : "+ endDate);
    if(batch==null || startDate==null || endDate==null){
      this.sendNotification2();
      return;
    }

    this.addBatchService.addNewBatch(batch,startDate, endDate)
    .subscribe(result => {
      this.batch= '';
      this.startDate='';
      this.endDate= '';
      this.sendNotification();
      this.ngOnInit();
    },errror => {
      this.sendNotification1();
    })
  }

  onUserChange(event : any){
    this.enability = event;
    
    if(this.enability=="en"){
      this.enable=true;
    }
    if(this.enability=="dis"){
      this.enable=false;
    }
    this.getBatches.getAllData()
    .subscribe(data => {
      this.batches= data;
      this.batches.sort((a,b)=>b.batch-a.batch);
      //console.log("en : "+ this.enable+" : "+ this.batches[0].batch);

      this.enableBatchService.updateEnabilityOfBatch(this.batches[0].batch, this.enable)
      .subscribe(data => {
        this.sendNotification();
      },errror => {
        this.sendNotification1();
      });

    });
  }

  // changeEnability(){
  // }

  sendNotification() {
  	this.ngxNotificationService.sendMessage('Added Successfully', 'dark', 'bottom-right');
  }

  sendNotification1() {
  	this.ngxNotificationService.sendMessage('Added Fail. Try again', 'dark', 'bottom-right');
  }

  sendNotification2() {
  	this.ngxNotificationService.sendMessage('Please fill required field', 'dark', 'bottom-right');
  }

}
