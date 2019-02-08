import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { student } from '../Model/Student';
import { AdminAddStudentServiceService } from '../Services/admin-add-student-service.service';
import { AdminAddAllStudentService } from '../Services/admin-add-all-student.service';
import { AuthChatASService } from '../Services/auth-chat-a-s.service';
import * as GC from '@grapecity/spread-sheets';
import * as Excel from '@grapecity/spread-excelio';
import '@grapecity/spread-sheets-charts';
import {saveAs} from 'file-saver';
import { from } from 'rxjs';
import { error } from '@angular/compiler/src/util';
import { NgxNotificationService } from 'ngx-notification';
import { GetPresentBatchService } from '../Services/get-present-batch.service';
import { Batch } from '../Model/Batch';
import {UserListService } from '../Services/user-list.service';
import { DataPassService } from '../Services/data-pass.service';

@Component({
  selector: 'app-admin-add-student',
  templateUrl: './admin-add-student.component.html',
  styleUrls: ['./admin-add-student.component.css']
})
export class AdminAddStudentComponent implements OnInit {
  email: string;
  password: string;
  displayName: string;
  errorMsg: string;

  password2:any;
  password3:string;
  batch1;
  batch2:string;
  batch3:string;
  student:student[];
  batch: Batch[];
  count = 0 ;
  countString ;
  aaa = "aaa";

  spreadBackColor = 'aliceblue';
  hostStyle = {
    width: '98%',
    height: '50vh'
  };
  private spread: GC.Spread.Sheets.Workbook;
  private excelIO;
  private a;

  constructor(private studentService : AdminAddStudentServiceService,private allStudentService :AdminAddAllStudentService,
    private authService: AuthChatASService,private ngxNotificationService: NgxNotificationService,
    private getBatches: GetPresentBatchService,private userList:UserListService,private data: DataPassService) { 
    this.excelIO = new Excel.IO();
  }

  ngOnInit() {
    //console.log(this.aaa.toLocaleUpperCase());
    this.getBatches.getAllData()
    .subscribe(data => {
      this.batch= data;
      this.batch.sort((a,b)=>a.batch-b.batch);
    });
  }

  getSelectedBatch(batch){
    this.batch1=batch;
  }

  getSelectedBatch2(batch){
    this.batch2=batch;
  }

  getSelectedBatch3(batch){
    this.batch3=batch;
  }

  onSubmit(formdata:NgForm){
    if (formdata.value.uname==null || formdata.value.sname==null || formdata.value.psw==null || this.batch1==null ) {
      this.sendNotification3();
      return;
    }
    if(formdata.value.uname.length!=7){
      this.sendNotification6(formdata.value.uname);
      return;
    }
    this.studentService.getStudentData(formdata,this.batch1)
    .subscribe((data : student[] )=> {
        this.student = data;
        this.userList.sendUserWithCustomId(formdata.value.uname.toLocaleUpperCase(),"Student");
        formdata.reset();  
        this.batch1='';
        this.count= 1;
        this.data.setStuCount("1");
        this.sendNotification4(1); 
      
    },error => {
      this.sendNotification7();
    });
  }
  
  workbookInit(args) {
    const self = this;
    self.spread = args.spread;
    const sheet = self.spread.getActiveSheet();
    sheet.setRowCount(300);
    sheet.setColumnWidth(0,175);
    sheet.setColumnWidth(1,250);
    sheet.getCell(0, 0).text('Register No').foreColor('blue');   
    sheet.getCell(0, 1).text('Name').foreColor('blue');  
    sheet.setActiveCell(1,0); 
  }

  getData(args,psw2){
    //add datavfrom work sheet
    if (psw2==null || this.batch2==null ) {
      this.sendNotification1();
      return;
    }
    const self=this;
    this.a=self.spread.getActiveSheet().getRowCount();
          for (let index = 1; index < this.a; index++) {
            if (self.spread.getActiveSheet().getValue(index,0)!=null) {
              if(self.spread.getActiveSheet().getValue(index,0).length!=7){
                this.sendNotification6(self.spread.getActiveSheet().getValue(index,0));
                continue;
              }
              this.allStudentService.getStudentData(self.spread.getActiveSheet().getValue(index,0).toLocaleUpperCase(),self.spread.getActiveSheet().getValue(index,1),psw2,parseInt(this.batch2))
              .subscribe((data : student[] )=> {
              this.student = data;
              this.userList.sendUserWithCustomId(self.spread.getActiveSheet().getValue(index,0).toLocaleUpperCase(),"Student");
              self.spread.getActiveSheet().setValue(index,0,'');
              self.spread.getActiveSheet().setValue(index,1,'');
              this.count++;
              this.data.setStuCount(this.count+"");
              });
              console.log(self.spread.getActiveSheet().getValue(index,0));
              
            } else {
              continue;
            }
            
          }
          this.password2='';
          this.batch2='';
          this.sendNotification4(this.count);
  }

  onFileChange(args) {
    const self = this, file = args.srcElement && args.srcElement.files && args.srcElement.files[0];
    if (self.spread && file) {
      self.excelIO.open(file, (json) => {
        self.spread.fromJSON(json, {});
        setTimeout(() => {          
          this.sendNotification2();
        }, 0);
      }, (error) => {
        alert('load fail');
      });
    }
  }

  uploadData(args,psw3){
    if (psw3==null || this.batch3==null) {
      this.sendNotification1();
      return;
    }
    const self=this;
    
    this.a=self.spread.getSheet(1).getRowCount();
    for (let index = 0; index < this.a; index++) {
      if (self.spread.getSheet(1).getValue(index,0)!=null) {
        if(self.spread.getSheet(1).getValue(index,0).length!=7){
          this.sendNotification6(self.spread.getActiveSheet().getValue(index,0));
          continue;
        }
        this.allStudentService.getStudentData(self.spread.getSheet(1).getValue(index,0).toLocaleUpperCase(),self.spread.getSheet(1).getValue(index,1),psw3,parseInt(this.batch3))
        .subscribe((data : student[] )=> {
        this.student = data;
        this.userList.sendUserWithCustomId(self.spread.getSheet(1).getValue(index,0).toLocaleUpperCase(),"Student");
        self.spread.getActiveSheet().setValue(index,0,'');
        self.spread.getActiveSheet().setValue(index,1,'');
        this.count++;
        console.log(this.count+"");
        this.data.setStuCount(this.count+"");
        },error => {
          this.sendNotification7();
        });
        
        // console.log(self.spread.getSheet(1).getValue(index,0));
        // console.log(psw3);
      } else {
        continue;
      }      
    }
    this.password3='';
    this.batch3='';
    this.sendNotification4(this.count);
  }

  sendNotification1() {
  	this.ngxNotificationService.sendMessage('Please enter password and batch', 'danger', 'bottom-right');
  }

  sendNotification2() {
  	this.ngxNotificationService.sendMessage('Load sucessfully', 'success', 'bottom-right');
  }

  sendNotification3() {
  	this.ngxNotificationService.sendMessage('Please enter Username, Password and batch', 'danger', 'bottom-right');
  }

  sendNotification4(count: number) {
    this.countString = this.data.getStuCount();
  	this.ngxNotificationService.sendMessage(' Added sucessfully', 'success', 'bottom-right');
  }

  sendNotification5() {
  	this.ngxNotificationService.sendMessage('Please enter Register No in first column & Name in second column only', 'danger', 'bottom-right');
  }

  sendNotification6(name) {
  	this.ngxNotificationService.sendMessage('Register No should be 7 characters long', 'danger', 'bottom-right');
  }

  sendNotification7() {
  	this.ngxNotificationService.sendMessage('Added Fail. Try again', 'danger', 'bottom-right');
  }

}
