import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataPassService } from '../Services/data-pass.service';
import { StuSelectedCompany } from '../Model/StuSelectedCompany';
import { CompanyGetStudentlistService } from '../Services/company-get-studentlist.service';
import { ReadUnamePswServiceService } from 'src/app/component/Services/read-uname-psw-service.service';
import { LoggingStudentService } from '../Services/logging-student.service';
import { student } from '../Model/Student';
import { forEach } from '@angular/router/src/utils/collection';
import { MatTableDataSource,MatSort } from '@angular/material';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { CompanyInternshipDetails } from '../Model/CompanyInternshipDetails';
import { GetOneCompanyInternshipDetailsService } from 'src/app/component/Services/get-one-company-internship-details.service';
import { GetPresentBatchService } from '../Services/get-present-batch.service';
import { Batch } from '../Model/Batch';

@Component({
  selector: 'app-company-profile-studentlist',
  templateUrl: './company-profile-studentlist.component.html',
  styleUrls: ['./company-profile-studentlist.component.css']
})


export class CompanyProfileStudentlistComponent implements OnInit {
 
  KEY = 'logger';
  value: string ;
  id:string;
  students: Array<student>=[];
  
  stuList : StuSelectedCompany[];
  stuList1 : Array<StuSelectedCompany> = [];
  stuList2 : Array<student> = [];
  stuList3 : Array<student> = [];
  i=0;
  student : student;
  logstudent :student;
  dataSource = new MatTableDataSource(this.students);
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['reg','name','email','contact','cgpa'];
  batch: Batch[];
  enable :boolean ;
  cid : CompanyInternshipDetails;

  constructor(private readService: ReadUnamePswServiceService,private readStudentList : CompanyGetStudentlistService, 
    private router:Router, private data : DataPassService, private studentService : LoggingStudentService, 
    private intrnshipService: GetOneCompanyInternshipDetailsService,
    private getBatches: GetPresentBatchService) { }

  ngOnInit() {
    this.value = this.data.getMessage();

    this.getBatches.getAllData()
    .subscribe(data => {
      this.batch= data;
      this.batch.sort((a,b)=>b.batch-a.batch);
      this.enable = this.batch[0].enable;

      //if( !this.disable ){
      //console.log(this.batch[0].batch);
      if( this.enable == true ){
      
        this.readStudentList.getStudentList()
        .subscribe(data => {this.stuList = data;
          this.stuList.forEach(element => {
            if(element.organization == this.value){
                this.intrnshipService.getData(element.name)
                .subscribe(data => {
                this.cid=data;
                  if (this.cid==null){
                    this.studentService.getData(element.name)
                    .subscribe(data => {this.student = data;
                      this.stuList2[this.i] = this.student;
                      this. dataSource = new MatTableDataSource(this.stuList2);
                      this.dataSource.sort = this.sort;
                      this.i++;
                    })
                  }     
                });
            }
          });
        }); 
      }
      
    });
        
}   
    

  

  getData(id:string){
    this.id=id;
    console.log(this.id+'getData function 1')
    this.readService.getId(this.id);
    return id;
  }


  applySort(){
    this.value = this.data.getMessage();
    
        this.readStudentList.getStudentList()
        .subscribe(data => {this.stuList = data;
          this.stuList.forEach(element => {
            if(element.organization == this.value){
                this.intrnshipService.getData(element.name)
                .subscribe(data => {
                this.cid=data;
                  if (this.cid==null){
                    this.studentService.getData(element.name)
                    .subscribe(data => {this.student = data;
                      this.stuList2[this.i] = this.student;
                      this. dataSource = new MatTableDataSource(this.stuList2);
                      this.dataSource.sort = this.sort;
                      this.i++;
                    })
                  }     
                });
            }
          });
         
        }); 
    
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (data: student, filter: string) => 
    data.name.toLowerCase().indexOf(filter) != -1;
 } 

}
