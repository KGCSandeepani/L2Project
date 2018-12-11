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

  student:student[];

  spreadBackColor = 'aliceblue';
  hostStyle = {
    width: '50vw',
    height: '50vh'
  };
  private spread: GC.Spread.Sheets.Workbook;
  private excelIO;
  private a;

  constructor(private studentService : AdminAddStudentServiceService,private allStudentService :AdminAddAllStudentService,private authService: AuthChatASService) { 
    this.excelIO = new Excel.IO();
  }

  ngOnInit() {
  }

  onSubmit(formdata:NgForm){
    // console.log(formdata.value.s_text);
    this.studentService.getStudentData(formdata)
    .subscribe((data : student[] )=> {
        this.student = data;
        formdata.reset();    
    });
  }
  
  workbookInit(args) {
    const self = this;
    self.spread = args.spread;
    const sheet = self.spread.getActiveSheet();
    sheet.setRowCount(300);
    sheet.getCell(0, 0).text('Username').foreColor('blue');   
  }

  getData(args,psw2){
    const self=this;
    this.a=self.spread.getActiveSheet().getRowCount();
          for (let index = 1; index < this.a; index++) {
            if (self.spread.getActiveSheet().getValue(index,0)!=null) {
              this.allStudentService.getStudentData(self.spread.getActiveSheet().getValue(index,0),psw2)
              .subscribe((data : student[] )=> {
              this.student = data;
              });
              console.log(self.spread.getActiveSheet().getValue(index,0));
              console.log(psw2);
            } else {
              break;
            }
            
          }
          
  }

  onFileChange(args) {
    const self = this, file = args.srcElement && args.srcElement.files && args.srcElement.files[0];
    if (self.spread && file) {
      self.excelIO.open(file, (json) => {
        self.spread.fromJSON(json, {});
        setTimeout(() => {
          this.a=self.spread.getSheet(1).getRowCount();
          for (let index = 0; index < this.a; index++) {
            console.log(self.spread.getSheet(1).getValue(index,0));
            
          }
          console.log(this.a);
          alert('load successfully');
        }, 0);
      }, (error) => {
        alert('load fail');
      });
    }
  }

}
