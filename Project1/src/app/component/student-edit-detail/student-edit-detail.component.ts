import { Component, OnInit } from '@angular/core';
import { StuSelectedCompany } from 'src/app/component/Model/StuSelectedCompany';
import { student } from 'src/app/component/Model/Student';
import { ReadUnamePswServiceService } from 'src/app/component/Services/read-uname-psw-service.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataPassService } from 'src/app/component/Services/data-pass.service';
import { NgForm,FormControl } from '@angular/forms';
import { NoOfCompany } from '../Model/NoOfCompany';
import { company } from 'src/app/component/Model/Company';
import { AdminUpdateStudentService } from '../Services/admin-update-student.service';
import { GetNoOfCompanyService } from '../Services/get-no-of-company.service';
import { AdminViewCompanyService } from 'src/app/component/Services/admin-view-company.service';
import { StudentSelectedCompanyService } from 'src/app/component/Services/student-selected-company.service';
import { isUndefined, isNull } from 'util';
import { NgxNotificationService } from 'ngx-notification';
import { AngularFireStorage , AngularFireStorageReference , AngularFireUploadTask } from 'angularfire2/storage';
import { GetBatchOfStudentService } from '../Services/get-batch-of-student.service';
import { Batch } from '../Model/Batch';

@Component({
  selector: 'app-student-edit-detail',
  templateUrl: './student-edit-detail.component.html',
  styleUrls: ['./student-edit-detail.component.css']
})
export class StudentEditDetailComponent implements OnInit {
    loger: string ;
    message : string;
    student:student;
    StuSelectedCompany:StuSelectedCompany[];
    StuSelectedCompany1:Array<StuSelectedCompany> = [];
    name:string;
    urlForSave: string;
    logger: string;
    noOfCompany : NoOfCompany;
    num : number ;
    array : Array<number> =[];
    company: Array<company>=[];
    selectedCompany: StuSelectedCompany;
    interestField : String[] =['Programming','Web Technologies','Mobile Technologies','Network Technologies','Business Analysis','Quality Assuarance','UI/UX Design']
    interest1 : String;
    interest2 : String;
    interest3 : String;  
    disableButton :boolean ;
    probar=false;
    l=0;
    batch: Batch;    

    constructor(private data : DataPassService, 
                private getBatches: GetBatchOfStudentService, 
                private ngxNotificationService: NgxNotificationService,
                private afStorage: AngularFireStorage ,
                private stuCompany : StudentSelectedCompanyService,
                private updateService : AdminUpdateStudentService,
                private readCompanyService: AdminViewCompanyService, 
                private getNoOfCompany : GetNoOfCompanyService, 
                private readService: ReadUnamePswServiceService,
                private route : ActivatedRoute,
                private router : Router) { }

  ngOnInit() {
    
    this.loger = this.data.getMessage();
    console.log(this.loger+"in the student view");
    this.readService.getId(this.loger);
    this.readData();
    this.retrieveCom();
    this.name = this.readService.setId();
    this.getNoOfCompany.getData()
      .subscribe(data => {this.noOfCompany = data;
      this.num=this.noOfCompany.amount;

    for (let index = 0; index < this.num; index++) {
      this.array[index]=index+1;         
    }
   
    });

    this.readCompanyService.getData()
    .subscribe(data => {this.company = data });

  }
  
readData(){
    this.readService.reteriveData()
    .subscribe((data : student )=> {
      this.student = data;
      console.log(this.student);

      this.interest1=this.student.interest1;
      this.interest2=this.student.interest2;
      this.interest3=this.student.interest3;

      this.getBatches.getData(this.student.batch)
      .subscribe(data => {
        this.batch= data;        
        this.disableButton=this.batch.enable;
        console.log(this.disableButton);
      });

   });
}

retrieveCom(){
    console.log('in the com');
    this.readService.reteriveComData()
    .subscribe((data : StuSelectedCompany[] )=> {
      this.StuSelectedCompany = data;
      console.log(this.StuSelectedCompany);
      this.StuSelectedCompany.forEach(element => {
        if (element.name==this.loger) {
          this.StuSelectedCompany1[this.l] = element;
          this.l++;
        }
      });
   
  });
}
  getCompany(item: number,companyname: String){
    console.log(this.loger+" : "+item+" : "+ companyname);
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
        formdata.value.cgpa==null){
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
          //this.disableButton=false;
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
