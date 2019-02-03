import { Component, OnInit } from '@angular/core';
import { AdminViewCompanyService } from 'src/app/component/Services/admin-view-company.service';
import { company } from 'src/app/component/Model/Company';
import { ReadUnamePswServiceService } from 'src/app/component/Services/read-uname-psw-service.service';
import { student } from 'src/app/component/Model/Student';
import { GetPresentBatchService } from 'src/app/component/Services/get-present-batch.service';
import { Batch } from 'src/app/component/Model/Batch';
import { GetMaxBatchService } from 'src/app/component/Services/get-max-batch.service';

@Component({
  selector: 'app-admin-analysis',
  templateUrl: './admin-analysis.component.html',
  styleUrls: ['./admin-analysis.component.css']
})
export class AdminAnalysisComponent implements OnInit {
  dataSource: any;
  datasource: any;
  message: string;
  chartObj: any;
  handler:any;
  initMessage:any;
  iMsg:string;
  clickPlotMsg:string;
  attached: boolean;

  company: company[];
  company1: Array<company> = [];
  company2: Array<company> = [];
  company3: Array<company> = [];
  company4: Array<company> = [];
  newArray: Array<string>=[];
  maxBatch: number;
  count=0;count1=0;
  count2=0;count3=0;
  t=0;k=0;a=0;
  b=0; c=0;d=0;
  
  students: student[];
  batch: Batch[];
  max1=0; max2=0; max3=0;
  max4=0; max5=0;

  constructor(private readCompanyService: AdminViewCompanyService,private readService: ReadUnamePswServiceService,
    private getBatches: GetPresentBatchService,private getMaxBatchService: GetMaxBatchService) { }

  ngOnInit() {
 
    this.countCompany();
    this.adminCountStudent();

  }

  countCompany(){
    
    this.readCompanyService.getData()
    .subscribe(data => {this.company = data ;
      this.company.forEach(element => {

        if (element.doInternship) {
          this.company4[this.c]=element;
          this.c++;
         this.count1 = this.company4.length;         
        }

        else if(!element.doInternship){
          this.company2[this.a]=element;
          this.a++;
         this.count2 = this.company2.length;     
        }       
      });

      this.count3 = (this.count1+this.count2);
      console.log(this.count1+"count1");
      console.log(this.count2+"count2");
      console.log(this.count3+"count3");
      this.attached = false;
      this.dataSource = {
        "chart": {
          "caption": "Summary of companies in this year",
          "showValues":"1",
          "showPercentInTooltip" : "0",
          "enableMultiSlicing":"1",
          "formatnumber":"1",
          "formatnumberscale":"6",
          "sformatnumber":"1",
          "theme": "fusion"
        },
        "data": [{
          "label": "# compnies give intern",
          "value": this.count1
        }, {
          "label": "# of companies do not give intern",
          "value":  this.count2
        }, 
      ]
    }

//   public pieChartLabels:string[] = ["SE", "QA", "BA"];
//   public pieChartData:number[] = [145,89,77];
//   public pieChartType:string = 'doughnut';
//   public pieChartOptions:any = {'backgroundColor': [
//                "#FF6384",
//             "#4BC0C0",
//             "#FFCE56",
//             "#E7E9ED",
//             "#36A2EB"
//             ]}
 
//   // events on slice click
//   public chartClicked(e:any):void {
//     console.log(e);
//   }
 
//  // event on pie chart slice hover
//   public chartHovered(e:any):void {
//     console.log(e);
//   }
    });
  }
 
  adminCountStudent(){

    this.getMaxBatchService.getMaxBatch();
    this.maxBatch = parseInt(sessionStorage.getItem("maxBatch"), 10);
    console.log("max "+this.maxBatch);

    this.readService.getData()
    .subscribe((data: student[]) => {
      this.students = data;


      for(var i=0;i<this.students.length;i++){
        if(this.students[i].batch==(this.maxBatch-1) && this.students[i].availability==false){
          this.max1++;
        }
        else if(this.students[i].batch==(this.maxBatch-2) && this.students[i].availability==false){
          this.max2++;
        }
        else if(this.students[i].batch==(this.maxBatch-3) && this.students[i].availability==false){
          this.max3++;
        }
        else if(this.students[i].batch==(this.maxBatch-4) && this.students[i].availability==false){
          this.max4++;
        }
        else if(this.students[i].batch==(this.maxBatch-5) && this.students[i].availability==false){
          this.max5++;
        }
      }

      console.log(this.max1+"1")
      console.log(this.max2+"1")
      console.log(this.max3+"1")
      console.log(this.max4+"1")
      console.log(this.max5+"1")

      this.attached = false;
      this.datasource = {
        "chart": {
            "caption": "How many students got inetrnships in previous badges",
            "xAxisName": "badge",
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

    })
  }

}