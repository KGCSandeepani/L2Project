import { Component, OnInit } from '@angular/core';
import { AdminViewCompanyService } from 'src/app/component/Services/admin-view-company.service';
import { company } from 'src/app/component/Model/Company';
import { GetAllCompanyInternshipDetailsService } from '../Services/get-all-company-internship-details.service';
import { CompanyInternshipDetails } from '../Model/CompanyInternshipDetails';
import { LoggingStudentService } from '../Services/logging-student.service';
import { student } from '../Model/Student';
import { GetMaxBatchService } from '../Services/get-max-batch.service';

@Component({
  selector: 'app-stu-analysis',
  templateUrl: './stu-analysis.component.html',
  styleUrls: ['./stu-analysis.component.css']
})
export class StuAnalysisComponent implements OnInit {

  company: company[];
  company1: Array<company> = [];
  stu:Array<number> = [];
  i=0;
  j=0;
  comInternship: Array<CompanyInternshipDetails> = [];
  student: student;
  maxBatch: number;

  constructor(private readCompanyService: AdminViewCompanyService, private internshipService: GetAllCompanyInternshipDetailsService,
    private studentService : LoggingStudentService, private getMaxBatchService: GetMaxBatchService) { }

  ngOnInit() {

    this.getMaxBatchService.getMaxBatch();
    this.maxBatch = parseInt(sessionStorage.getItem("maxBatch"), 10);
    console.log("max "+this.maxBatch);
    
    this.readCompanyService.getData()
    .subscribe(data => {this.company = data ;
      this.company.forEach(element => {
        if (element.doInternship) {
          this.company1[this.i]=element;
          console.log(this.i+" : "+this.company1[this.i].name);
          this.i++;
          
          this.internshipService.getData()
          .subscribe(data => {this.comInternship = data;
            this.stu[this.i]= this.j;

            this.comInternship.forEach(element1 => {       
              if(element1.organization==element.name && element1.companyConfirmation){
                
                this.studentService.getData(element1.name)
                .subscribe(data => {
                  this.student=data;
                  if(this.student.batch==this.maxBatch){
                    this.stu[this.i]= ++this.j;
                    console.log("aaa"+element.name+ " : " + this.stu[this.i]);
                  }     
                });
              }
            });
            
          });

        }
      });
    });
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
