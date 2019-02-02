import { Component, OnInit } from '@angular/core';
import { AdminViewCompanyService } from 'src/app/component/Services/admin-view-company.service';
import { company } from 'src/app/component/Model/Company';
import { GetAllCompanyInternshipDetailsService } from '../Services/get-all-company-internship-details.service';
import { CompanyInternshipDetails } from '../Model/CompanyInternshipDetails';
import { LoggingStudentService } from '../Services/logging-student.service';
import { student } from '../Model/Student';
import { GetMaxBatchService } from '../Services/get-max-batch.service';
//import { InternStudentService } from 'src/app/component/Services/intern-student.service';
//import { intern } from 'src/app/component/Model/intern';
import { Breakpoints } from '@angular/cdk/layout/typings/breakpoints';



@Component({
  selector: 'app-stu-analysis',
  templateUrl: './stu-analysis.component.html',
  styleUrls: ['./stu-analysis.component.css']
})
export class StuAnalysisComponent implements OnInit {

  company: company[];
  company1: Array<company> = [];
  company2: Array<company> = [];
  company3: Array<company> = [];
  company4: Array<company> = [];
  newArray: Array<string>=[];
  stu:Array<number> = [];
  orgNum:Array<number> = [];
  orgName:Array<string> = [];
  i=0;j=0;
  comInternship: Array<CompanyInternshipDetails> = [];
  student: student;
  maxBatch: number;
  count=0;count1=0;
  count2=0;count3=0;
  num=0;
  t=0;k=0;a=0;
  b=0; c=0;d=0;
  dataSource: any;
  message: string;
  chartObj: any;
  handler:any;
  initMessage:any;
  iMsg:string;
  clickPlotMsg:string;
  attached: boolean;
  datasource: any;
  
  constructor(private readCompanyService: AdminViewCompanyService, private internshipService: GetAllCompanyInternshipDetailsService,
    private studentService : LoggingStudentService, private getMaxBatchService: GetMaxBatchService,
    ) { }

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
          this.count = this.company1.length;
          this.internshipService.getData()
          .subscribe(data => {this.comInternship = data;
            this.stu[this.i]= this.j;
            this.k=0;
            this.comInternship.forEach(element1 => {       
              if(element1.organization==element.name && element1.companyConfirmation && element1.batch==1){ 
                this.k++;               
                // this.studentService.getData(element1.name)
                // .subscribe(data => {
                //   this.student=data;
                //   if(this.student.batch!=1){
                //     this.t++;
                //     this.k=this.k-this.t;
                //     this.stu[this.i]= ++this.j;  
                //     this.num = this.stu[this.i];              
                //     console.log("aaa"+element.name+ " : " + this.stu[this.i]);
                //     this.set(element.name,this.k);
                //   }
                // });               
              }
            });
            console.log(element.name+" "+this.k);
            this.set(element.name,this.k)

          }); 
        }
      });
    });

    this.countCompany();  
  }

h=0;

  set(n:String,y:number){
    this.h = y;
    this.orgName[this.d]=n.valueOf();
    this.orgNum[this.d]=y;
    this.d++;
    // this.newArray = this.orgName.filter((elem, i, arr) => {
    //   if (arr.indexOf(elem) === i) {
    //     console.log(elem);
    //     return elem
    //   }
    // })
    // console.log(this.newArray);
    
  //   this.attached = false;
  //   this.dataSource = {
  //     "chart": {
  //         "caption": "summary of companies",
  //         "xAxisName": "company",
  //         "yAxisName": "count",
  //         "decimals": "2",
  //         "formatnumber":"1",
  //         "formatnumberscale":"6",
  //         "sformatnumber":"1",
  //         "theme": "gammel"
  //     },
  //     data: [{
  //       'label': " ",
  //       "value": " "
  //   }]
  // };

  // for(let i=0;i<8;i++){
  //   this.dataSource.data({
  //     'label': 'uuuu',
  //     'value': 10,
  // });
  // }

 

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
                   "caption": "summary of companies",
                   "xAxisName": "company",
                   "yAxisName": "count",
                   "decimals": "2",
                   "formatnumber":"1",
                   "formatnumberscale":"6",
                   "sformatnumber":"1",
                   "theme": "gammel"
               },
               "data": [
                   {
                       "label": "Total",
                       "value": this.count3
                   },
                   {
                       "label": "give intern",
                       "value": this.count1
                   },
                   {
                       "label": "do not give intern",
                       "value": this.count2
                   },
                  
               ]
             }   
            
    });
  }
 
  
  // public barChartOptions = {
  //    scaleShowVerticalLines: false,
  //     responsive: true
  //  };
  //   public barChartLabels: Array<string>[];
  //   public barChartType = 'bar';
  //   public barChartLegend = true;
  //   public barChartData : Array<number>=[];
   
}

