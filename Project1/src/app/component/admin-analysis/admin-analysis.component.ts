import { Component, OnInit } from '@angular/core';
import { AdminViewCompanyService } from 'src/app/component/Services/admin-view-company.service';
import { company } from 'src/app/component/Model/Company';

@Component({
  selector: 'app-admin-analysis',
  templateUrl: './admin-analysis.component.html',
  styleUrls: ['./admin-analysis.component.css']
})
export class AdminAnalysisComponent implements OnInit {
  dataSource: any;
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
  


  constructor(private readCompanyService: AdminViewCompanyService) { }

  ngOnInit() {
 
    this.countCompany();

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
}