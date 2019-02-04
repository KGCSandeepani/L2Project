import { Component, OnInit } from '@angular/core';
import { AdminChangeNoOfCompanyService } from '../Services/admin-change-no-of-company.service';
import { NoOfCompany } from 'src/app/component/Model/NoOfCompany';
import { AdminAddBatchService } from '../Services/admin-add-batch.service';
import { Batch } from 'src/app/component/Model/Batch';
import { AdminUpdateEnableBatchService } from '../Services/admin-update-enable-batch.service';
import { GetPresentBatchService } from '../Services/get-present-batch.service';

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
  constructor(private changeAmount : AdminChangeNoOfCompanyService, private addBatchService: AdminAddBatchService,
    private enableBatchService: AdminUpdateEnableBatchService, private getBatches: GetPresentBatchService) { }

  ngOnInit() {
    this.getBatches.getAllData()
    .subscribe(data => {
      this.batches= data;
      this.batches.sort((a,b)=>b.batch-a.batch);
      console.log("ng : "+ this.enable+" : "+ this.batches[0].batch);
      if (this.batches[0].enable!=null) {
        this.selectedbutton= this.batches[0].enable;
      }
    });
  }

  changeCompany(a:number){
    console.log(a);
    this.changeAmount.getAmount(a)
    .subscribe( (data : NoOfCompany) =>{
      this.noOfCompany = data;
      this.amount='';
    })
  }

  insertBatch(batch, startDate, endDate){
    console.log(batch +" : "+ startDate +" : "+ endDate);
    this.addBatchService.addNewBatch(batch,startDate, endDate)
    .subscribe(result => {
      this.batch= '';
      this.startDate='';
      this.endDate= '';
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
  }

  changeEnability(){
    
    this.getBatches.getAllData()
    .subscribe(data => {
      this.batches= data;
      this.batches.sort((a,b)=>b.batch-a.batch);
      console.log("en : "+ this.enable+" : "+ this.batches[0].batch);

      this.enableBatchService.updateEnabilityOfBatch(this.batches[0].batch, this.enable)
      .subscribe(data => {
        
      });

    });
    
    
  }

}
