import { Component, OnInit } from '@angular/core';
import { AdminChangeNoOfCompanyService } from '../Services/admin-change-no-of-company.service';
import { NoOfCompany } from 'src/app/component/Model/NoOfCompany';
import { AdminAddBatchService } from '../Services/admin-add-batch.service';
import { Batch } from 'src/app/component/Model/Batch';

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
  constructor(private changeAmount : AdminChangeNoOfCompanyService, private addBatchService: AdminAddBatchService) { }

  ngOnInit() {
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

}
