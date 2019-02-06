import { Component, OnInit } from '@angular/core';
import {NgForm,FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { student } from '../Model/Student';
import { NoOfCompany } from '../Model/NoOfCompany';
import { StuSelectedCompany } from '../Model/StuSelectedCompany';
import { company } from 'src/app/component/Model/Company';
import { AdminUpdateStudentService } from '../Services/admin-update-student.service';
import { GetNoOfCompanyService } from '../Services/get-no-of-company.service';
import { AdminViewCompanyService } from 'src/app/component/Services/admin-view-company.service';
import { StudentSelectedCompanyService } from 'src/app/component/Services/student-selected-company.service';
import { isUndefined, isNull } from 'util';
import { DataPassService } from '../Services/data-pass.service';
import { NgxNotificationService } from 'ngx-notification';
import { AngularFireStorage , AngularFireStorageReference , AngularFireUploadTask } from 'angularfire2/storage';

@Component({
  selector: 'app-student-add-detail',
  templateUrl: './student-add-detail.component.html',
  styleUrls: ['./student-add-detail.component.css']
})
export class StudentAddDetailComponent implements OnInit {

  urlForSave: string;
  name:string;
  logger: string;
  student : student;
  noOfCompany : NoOfCompany;
  num : number = 1;
  array : Array<number> =[];
  company: Array<company>=[];
  selectedCompany: StuSelectedCompany;
  interestField : String[] =['Programming','Web Technologies','Mobile Technologies','Network Technologies','Business Analysis','Quality Assuarance','UI/UX Design']
  interest1 : String;
  interest2 : String;
  interest3 : String;
  companyname:String;
  loger: string ;
  message : string;
  disableButton =true;
  probar=false;

  constructor(private ngxNotificationService: NgxNotificationService,
              private afStorage: AngularFireStorage ,
               private data : DataPassService, 
               private stuCompany : StudentSelectedCompanyService,
               private updateService : AdminUpdateStudentService,
               private readCompanyService: AdminViewCompanyService, 
               private getNoOfCompany : GetNoOfCompanyService, 
               private route : ActivatedRoute,
               private router:Router) { }

  ngOnInit() {

    this.loger = this.data.getMessage();

    this.getNoOfCompany.getData()
      .subscribe(data => {this.noOfCompany = data;
      this.num=this.noOfCompany.amount;
     
      if(this.num==null){
        this.num=1;
      }
      for (let index = 0; index < this.num; index++) {
        this.array[index]=index+1;         
      }
     
    },error => {
      this.num=1;
      this.array[0]=1;  
    });

    this.readCompanyService.getData()
    .subscribe(data => {this.company = data });
          
  }

  getCompany(companyname: String){
    console.log(this.loger+" : "+ companyname);
    this.companyname=companyname;
    this.stuCompany.getStuSelectedCompany(this.loger,companyname)
    .subscribe((data : StuSelectedCompany)=>this.selectedCompany = data);
    
  }
  getInterest1(i : String){
    this.interest1=i;
  }
  getInterest2(i : String){
    this.interest2=i;
  }
  getInterest3(i : String){
    this.interest3=i;
  }

  onSubmit(formdata:NgForm){
    formdata.form.addControl('uploadPdfUrl' , new FormControl(this.urlForSave));
    
     console.log(formdata.value.name);
     console.log(formdata.value , formdata);
      if(formdata.value.uname==null || formdata.value.email==null || formdata.value.phoneNo==null || 
        formdata.value.l1s1==null || formdata.value.l1s2==null || formdata.value.l2s1==null || formdata.value.l2s2==null || 
        formdata.value.cgpa==null || this.interest1==null || this.interest2==null || this.interest3== null){
          this.sendNotification();
        }else{
          this.updateService.updateStudentData(formdata,this.interest1,this.interest2,this.interest3,this.loger)
          .subscribe(res=>{
          this.router.navigate(['student/studentAddSuccess']);
          });
        }
    
  }

  sendNotification() {
    this.ngxNotificationService.sendMessage('Please fill all the information before submit', 'dark', 'bottom-right');
    //dark, light, success, info, warning, danger and none
    //top-left, top-right, bottom-left, bottom-right and center
  }
  upload(event) {
    this.sendNotification1();
    this.probar=true;
    const filePath = `/student/CVs/`+ this.loger;
    this.afStorage.upload(filePath, event.target.files[0]).then( ()=> {
      const ref = this.afStorage.ref(filePath);
      const downloadUrl = ref.getDownloadURL().subscribe( url => {
          this.urlForSave = url;
          console.log("Uploaded "+this.urlForSave);
          // this.uploadProgress= this.task.percentageChanges();
          this.probar=false;
          this.disableButton=false;
          this.sendNotification2();
      })
    }); 
  }

  sendNotification1() {
    this.ngxNotificationService.sendMessage('Wait until upload file', 'danger', 'bottom-right');
    //dark, light, success, info, warning, danger and none
    //top-left, top-right, bottom-left, bottom-right and center
  }
  
  sendNotification2() {
    this.ngxNotificationService.sendMessage('File uploaded', 'success', 'bottom-right');
  }

}
