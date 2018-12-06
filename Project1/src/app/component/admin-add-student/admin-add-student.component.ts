import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { student } from '../Model/Student';
import { AdminAddStudentServiceService } from '../Services/admin-add-student-service.service';
import { AuthChatASService } from '../Services/auth-chat-a-s.service';

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
  constructor(private studentService : AdminAddStudentServiceService,private authService: AuthChatASService) { }

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
  
}
