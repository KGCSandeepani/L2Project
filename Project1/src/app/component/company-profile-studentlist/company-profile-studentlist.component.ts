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
import { CompanyInternshipDetails } from '../Model/CompanyInternshipDetails';
import { GetOneCompanyInternshipDetailsService } from 'src/app/component/Services/get-one-company-internship-details.service';

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
  stuList2 : Array<student> = [];
  stuList3 : Array<student> = [];
  i=0;
  student : student;
  logstudent :student;
  dataSource = new MatTableDataSource(this.students);
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['name', 'cgpa'];

  // constructor(private readService: ReadUnamePswServiceService,private logStudent: LoggingStudentService,
  //   private readStudentList : CompanyGetStudentlistService, private updateInternship : CompanyUpdateInternshipService, 
  //   private router:Router, private data : DataPassService, private studentService : LoggingStudentService) { 

  // }
  cid : CompanyInternshipDetails;

  constructor(private readService: ReadUnamePswServiceService,private readStudentList : CompanyGetStudentlistService, 
    private updateInternship : CompanyUpdateInternshipService, private router:Router, private data : DataPassService, 
    private studentService : LoggingStudentService, private intrnshipService: GetOneCompanyInternshipDetailsService) { }

  ngOnInit() {
    this.value = this.data.getMessage();

    this.readStudentList.getStudentList()
    .subscribe(data => {this.stuList = data;
      this.stuList.forEach(element => {
        if(element.organization == this.value){
            this.intrnshipService.getData(element.name)
            .subscribe(data => {
            // this.student=data;
            //   if (this.student.availability){
            //     this. dataSource = new MatTableDataSource(this.students);                 
            //     this.students[this.i]=data;
            this.cid=data;
              if (this.cid==null){
                this.studentService.getData(element.name)
                .subscribe(data => {this.student = data;
                  this.stuList2[this.i] = this.student;
                  
                  this.i++;
                })
                // this.stuList1[this.i] = element;
                // this.i++;
                //this.dataSource.sort = this.sort;
              }     
            });
        }
      });
    //  this. dataSource = new MatTableDataSource(this.stuList2);
    }); 

    this.applySort();
}   
    //});

    //   this.stuList.forEach(element => {
    //     if(element.organization == this.value){
    //         this.studentService.getData(element.name)
    //         .subscribe(data => {
    //         this.student=data;
    //           if (this.student.availability){
    //             this.stuList1[this.i] = element;
    //             this.i++;
    //           }
                 
    //         });
    //     }
    //   });
    // });

    //   this.readStudentList.getStudentList1(this.value)
    //  .subscribe(data => {this.stuList = data;
    //   this.stuList.forEach(element => {
            
    //             this.studentService.getData(element.name)
    //             .subscribe(data => {
    //             this.student=data;
    //               if (this.student.availability){
    //                 this.stuList1[this.i] = element;
    //                 this.i++;
    //               }
                     
    //             });
            
    //       });
    //  });

  

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

y=0;
  applySort(){
    this.value = this.data.getMessage();
    
        this.readStudentList.getStudentList()
        .subscribe(data => {this.stuList = data;
          this.stuList.forEach(element => {
            if(element.organization == this.value){
              this.readService.getData()
              .subscribe((data: student[]) => { this.students = data;
                this.students.forEach(element1 => {
                  if(element1.availability==true){
                    this.stuList3[this.y] = this.student;                    

                    this. dataSource = new MatTableDataSource(this.stuList3);
                    this.y++;
                    
                  }
                  
                })
                
              });
              
            }
          });
         
        });
        this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filterPredicate = (data: student, filter: string) => 
    data.name.toLowerCase().indexOf(filter) != -1;
 } 

}
