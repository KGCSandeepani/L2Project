import { Component, OnInit ,ViewChild} from '@angular/core';
import { CompanyUpdateInternshipService } from '../Services/company-update-internship.service';
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
  doInternship = "true";
  stuList : StuSelectedCompany[];
  stuList1 : Array<StuSelectedCompany> = [];
  i=0;
  student : student;
  logstudent :student;
  dataSource = new MatTableDataSource(this.students);
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'cgpa'];

  constructor(private readService: ReadUnamePswServiceService,private logStudent: LoggingStudentService,private readStudentList : CompanyGetStudentlistService, private updateInternship : CompanyUpdateInternshipService, private router:Router, private data : DataPassService, private studentService : LoggingStudentService) { 

  }

  ngOnInit() {
    this.value = this.data.getMessage();

    this.readStudentList.getStudentList()
    .subscribe(data => {this.stuList = data;
      this.stuList.forEach(element => {
        if(element.organization == this.value){
            this.studentService.getData(element.name)
            .subscribe(data => {
            this.student=data;
              if (this.student.availability){
                this. dataSource = new MatTableDataSource(this.students);                 
                this.students[this.i]=data;
                this.i++;
                this.dataSource.sort = this.sort;
              }     
            });
        }
      });
    }); 
}   

  onChange(event : any){
    this.doInternship = event.target.value;

    if(this.doInternship=="true"){
      this.updateInternship.updateCompanyInternshipData(this.value,true)
      .subscribe(res=>{
      });
    }

    else{
      this.updateInternship.updateCompanyInternshipData(this.value,false)
      .subscribe(res=>{
      });
    }  

  }

  getData(id:string){
    this.id=id;
    console.log(this.id+'getData function 1')
    this.readService.getId(this.id);
    return id;
  }

   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (data: student, filter: string) => 
    data.name.toLowerCase().indexOf(filter) != -1;
 } 

}
