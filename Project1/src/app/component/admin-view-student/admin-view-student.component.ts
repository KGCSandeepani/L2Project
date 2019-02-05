import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { student } from '../Model/Student';
import { CompanyInternshipDetails } from '../Model/CompanyInternshipDetails';
import { ReadUnamePswServiceService } from '../Services/read-uname-psw-service.service';
import { AdminDeleteStudentServiceService } from '../Services/admin-delete-student-service.service';
import { GetAllCompanyInternshipDetailsService } from '../Services/get-all-company-internship-details.service';
import { ConfirmationDialogServiceService } from 'src/app/component/confirmation-dialog-component/confirmation-dialog-service.service';


@Component({
  selector: 'app-admin-view-student',
  templateUrl: './admin-view-student.component.html',
  styleUrls: ['./admin-view-student.component.css']
})
export class AdminViewStudentComponent implements OnInit {

  [x: string]: any;
  id:string;
  students: student[];
  comInternship: Array<CompanyInternshipDetails> = [];

  constructor(private deleteService: AdminDeleteStudentServiceService,private readService: ReadUnamePswServiceService,
    private route: ActivatedRoute,private router: Router, private internshipService: GetAllCompanyInternshipDetailsService,
    private confirmationDialogService: ConfirmationDialogServiceService) { }

  ngOnInit() {
    this.readService.getData()
    .subscribe(data => this.students = data);
    console.log(this.students);

    this.internshipService.getData()
    .subscribe(data => this.comInternship = data);
  }

  onDelete(name:string,d:boolean) {
    if(d==true){
      this.deleteService.deleteStudentData(name).subscribe(result=>{
        console.log(result);
        this.ngOnInit();
      },error => console.log('There was an error: ', error))
    }
  }

    getData(id:string){
      this.id=id;
      console.log(this.id+'getData function 1')
      this.readService.getId(this.id);
      return id;
    }

    getDataCom(id:string){
      this.id=id;
      console.log(this.id+'getDataCom function 1')
      this.readService.getId(this.id);
      return id;
    }

    public openConfirmationDialog(name) {
      this.confirmationDialogService.confirm('Please confirm..', ' Do you really wish to delete '+name)
      .then((confirmed) => this.onDelete(name,confirmed))
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
    }

}
