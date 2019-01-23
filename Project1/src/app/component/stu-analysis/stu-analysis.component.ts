import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stu-analysis',
  templateUrl: './stu-analysis.component.html',
  styleUrls: ['./stu-analysis.component.css']
})
export class StuAnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['99X', 'Virtusa', 'WSO2', 'CreativeSoftware', 'CodeGen', 'Unicorn', 'MIT'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [7, 13, 4, 1, 8, 7, 9], label: '2016'},
    {data: [8, 14, 3, 2, 5, 14, 13], label: '2017'},
    {data: [9, 16, 2, 1, 8, 20, 9], label: '2018'}
  ];

 

}
