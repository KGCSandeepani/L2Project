





import { Component, OnInit } from '@angular/core';
import { AdminViewCompanyService } from 'src/app/component/Services/admin-view-company.service';
import { company } from 'src/app/component/Model/Company';
import { GetAllCompanyInternshipDetailsService } from '../Services/get-all-company-internship-details.service';
import { CompanyInternshipDetails } from '../Model/CompanyInternshipDetails';
import { LoggingStudentService } from '../Services/logging-student.service';
import { student } from '../Model/Student';
import { GetMaxBatchService } from '../Services/get-max-batch.service';
import { GetPresentBatchService } from 'src/app/component/Services/get-present-batch.service';
import { Batch } from 'src/app/component/Model/Batch';
//import { InternStudentService } from 'src/app/component/Services/intern-student.service';
//import { intern } from 'src/app/component/Model/intern';
//import { Breakpoints } from '@angular/cdk/layout/typings/breakpoints';



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
  wso2=0;
  virtusa=0;
  csw=0;
  codegen=0;
  nnx=0;
  others=0;
  batch: Batch[];
  
  constructor(private readCompanyService: AdminViewCompanyService, private internshipService: GetAllCompanyInternshipDetailsService,
    private studentService : LoggingStudentService, private getMaxBatchService: GetMaxBatchService,private getBatches: GetPresentBatchService
    ) { }

  ngOnInit() {

    this.getBatches.getAllData()
    .subscribe(data => {
      this.batch= data;
      this.batch.sort((a,b)=>b.batch-a.batch);
      console.log(this.batch[0].batch+"max batch")
    
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
              if(element1.organization==element.name && element1.companyConfirmation && element1.batch==this.batch[0].batch-1){ 
                this.k++;                             
              }
            });
            console.log(element.name+" "+this.k);
            this.set(element.name,this.k)

          }); 
        }
      });
    });
  });

    this.countCompany(); 
    this.getChart(); 
  }


set(n:String,y:number){
  
    this.orgName[this.d]=n.valueOf();
    this.orgNum[this.d]=y;
    this.d++;
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

  getChart(){

    this.getBatches.getAllData()
    .subscribe(data => {
      this.batch= data;
      this.batch.sort((a,b)=>b.batch-a.batch);
      console.log(this.batch[0].batch+"max batch")

      this.internshipService.getData()
      .subscribe(data => {this.comInternship = data;

        this.comInternship.forEach(element1 => {       
          if((element1.organization).toLocaleLowerCase()=="wso2" && element1.companyConfirmation && element1.batch==(this.batch[0].batch-1)){ 
            this.wso2++;  
          }
          else if((element1.organization).toLocaleLowerCase()=="virtusa" && element1.companyConfirmation && element1.batch==(this.batch[0].batch-1)){
            this.virtusa++;
          }
          else if((element1.organization).toLocaleLowerCase()=="99x" && element1.companyConfirmation && element1.batch==(this.batch[0].batch-1)){
            this.nnx++;
          }
          else if((element1.organization).toLocaleLowerCase()=="codegen" && element1.companyConfirmation && element1.batch==(this.batch[0].batch-1)){
            this.codegen++;
          }
          else{
            this.others++;
          }         
    });
    
    this.attached = false;
            this.datasource = {
              "chart": {
                  "caption": "How companies gave internships  in the last batch",
                  "xAxisName": "Name of the company",
                  "yAxisName": "No of students",
                  "decimals": "2",
                  "formatnumber":"1",
                  "formatnumberscale":"6",
                  "sformatnumber":"1",
                  "theme": "gammel"
              },
              data: [{
                'label': "WSO2",
                "value": this.wso2
            },
            {
              'label': "Virtusa",
              "value": this.virtusa
            },
            {
              'label': "99X",
              "value": this.nnx
            },
            {
              'label': "Codegen",
              "value": this.codegen
            },

          ]
          };
  });
    
  });
}
 
   
}

