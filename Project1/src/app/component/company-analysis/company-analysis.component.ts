import { Component, OnInit } from '@angular/core';
import { AdminViewCompanyService } from 'src/app/component/Services/admin-view-company.service';
import { ReadUnamePswServiceService } from 'src/app/component/Services/read-uname-psw-service.service';
import { GetPresentBatchService } from 'src/app/component/Services/get-present-batch.service';
import { GetMaxBatchService } from 'src/app/component/Services/get-max-batch.service';
import { student } from 'src/app/component/Model/Student';
import { Batch } from 'src/app/component/Model/Batch';
import { DataPassService } from 'src/app/component/Services/data-pass.service';
import { CompanyConfirmStudentService } from 'src/app/component/Services/company-confirm-student.service';
import { CompanyInternshipDetails } from 'src/app/component/Model/CompanyInternshipDetails';
import { GetAllCompanyInternshipDetailsService } from 'src/app/component/Services/get-all-company-internship-details.service';

@Component({
  selector: 'app-company-analysis',
  templateUrl: './company-analysis.component.html',
  styleUrls: ['./company-analysis.component.css']
})
export class CompanyAnalysisComponent implements OnInit {

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
  value:string;
  CompanyConfirmStudent:CompanyInternshipDetails[]

  constructor(private readCompanyService: AdminViewCompanyService,private readService: ReadUnamePswServiceService,
    private getBatches: GetPresentBatchService,private getMaxBatchService: GetMaxBatchService,
    private data : DataPassService,private getConCompany:GetAllCompanyInternshipDetailsService) { }

  ngOnInit() {

    this.adminCountStudent();
  }


  adminCountStudent(){
    
    this.value = this.data.getMessage();
    
      this.getBatches.getAllData()
        .subscribe(data => {
          this.batch= data;
          this.batch.sort((a,b)=>b.batch-a.batch);
          console.log(this.batch[0].batch+"max batch")
          this.max = this.batch[0].batch;
          console.log(this.max+"max batch")

          this.getConCompany.getData()
            .subscribe((data: CompanyInternshipDetails[]) => {
              this.CompanyConfirmStudent = data;

              for(var i=0;i<this.CompanyConfirmStudent.length;i++){

                if(this.CompanyConfirmStudent[i].batch==(this.max-1) && this.CompanyConfirmStudent[i].organization==this.value && 
                this.CompanyConfirmStudent[i].companyConfirmation==true){
                  this.max1++;
                }

                else if(this.CompanyConfirmStudent[i].batch==(this.max-2)&& this.CompanyConfirmStudent[i].organization==this.value &&
                this.CompanyConfirmStudent[i].companyConfirmation==true){
                  this.max2++;
                }

                else if(this.CompanyConfirmStudent[i].batch==(this.max-3)&& this.CompanyConfirmStudent[i].organization==this.value &&
                this.CompanyConfirmStudent[i].companyConfirmation==true){
                  this.max3++;
                }

                else if(this.CompanyConfirmStudent[i].batch==(this.max-4)&& this.CompanyConfirmStudent[i].organization==this.value){
                  this.max4++;
                }

                else if(this.CompanyConfirmStudent[i].batch==(this.max-5) && this.CompanyConfirmStudent[i].organization==this.value &&
               this.CompanyConfirmStudent[i].companyConfirmation==true){
                  this.max5++;
                }
              }

                this.attached = false;
                    this.datasource = {
                      "chart": {
                          "caption": "How many internship  offerings to UOM students in previous batches",
                          "xAxisName": "batch",
                          "yAxisName": "no of internships",
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


      })
    }
  }

