import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/component/Model/Student';
import { Batch } from 'src/app/component/Model/Batch';
import { AdminViewCompanyService } from 'src/app/component/Services/admin-view-company.service';
import { GetPresentBatchService } from 'src/app/component/Services/get-present-batch.service';
import { ReadUnamePswServiceService } from 'src/app/component/Services/read-uname-psw-service.service';
import { GetMaxBatchService } from 'src/app/component/Services/get-max-batch.service';

@Component({
  selector: 'app-supervisor-profile-analysis',
  templateUrl: './supervisor-profile-analysis.component.html',
  styleUrls: ['./supervisor-profile-analysis.component.css']
})
export class SupervisorProfileAnalysisComponent implements OnInit {

  students: student[];
  batch: Batch[];
  max1=0; max2=0; max3=0;
  max4=0; max5=0;
  max=0;
  datasource: any;
  message: string;
  chartObj: any;
  handler:any;
  initMessage:any;
  iMsg:string;
  clickPlotMsg:string;
  attached: boolean;

  constructor(private readCompanyService: AdminViewCompanyService,private readService: ReadUnamePswServiceService,
    private getBatches: GetPresentBatchService,private getMaxBatchService: GetMaxBatchService) { }

  ngOnInit() {

    this.getStuGraph();

  }


  getStuGraph(){
       this.getBatches.getAllData()
        .subscribe(data => {
          this.batch= data;
          this.batch.sort((a,b)=>b.batch-a.batch);
          console.log(this.batch[0].batch+"max batch")
          this.max = this.batch[0].batch;
          console.log(this.max+"max batch")
    
        this.readService.getData()
        .subscribe((data: student[]) => {
          this.students = data;
    
    
          for(var i=0;i<this.students.length;i++){
            if(this.students[i].batch==(this.max-1) && this.students[i].availability==false ){
              this.max1++;
            }
           
            else if(this.students[i].batch==(this.max-2) && this.students[i].availability==false){
              this.max2++;
            }
            
            else if(this.students[i].batch==(this.max-3) && this.students[i].availability==false){
              this.max3++;
            }
           
            else if(this.students[i].batch==(this.max-4) && this.students[i].availability==false){
              this.max4++;
            }
            
            else if(this.students[i].batch==(this.max-5) && this.students[i].availability==false){
              this.max5++;
            }
           
          }
    
          console.log(this.max1+"1")
          console.log(this.max2+"1")
          console.log(this.max3+"1")
          console.log(this.max4+"1")
          console.log(this.max5+"1")
        //  console.log(this.maxT1+"1")
    
          this.attached = false;
          this.datasource = {
            "chart": {
                "caption": "How many students got inetrnships in previous batches",
                "xAxisName": "batch",
                "yAxisName": "no of students",
                "decimals": "2",
                "formatnumber":"1",
                "formatnumberscale":"6",
                "sformatnumber":"1",
                "theme": "gammel"
            },
            "data": [
                {
                    "label": "last",
                    "value": this.max1
                },
                {
                    "label": "last -1",
                    "value": this.max2
                },
                {
                    "label": "last-2",
                    "value": this.max3
                },
                {
                  "label": "last-3",
                  "value": this.max4
              },
              {
                "label": "last-4",
                "value": this.max5
            },
               
            ]
          }   
    
        });
      });
  }
  


}
