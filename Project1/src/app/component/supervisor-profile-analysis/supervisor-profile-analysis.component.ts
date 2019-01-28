import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supervisor-profile-analysis',
  templateUrl: './supervisor-profile-analysis.component.html',
  styleUrls: ['./supervisor-profile-analysis.component.css']
})
export class SupervisorProfileAnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  public pieChartLabels:string[] = ["SE", "QA", "BA"];
  public pieChartData:number[] = [145,89,77];
  public pieChartType:string = 'doughnut';
  public pieChartOptions:any = {'backgroundColor': [
               "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB"
            ]}
 
  // events on slice click
  public chartClicked(e:any):void {
    console.log(e);
  }
 
 // event on pie chart slice hover
  public chartHovered(e:any):void {
    console.log(e);
  }

}
