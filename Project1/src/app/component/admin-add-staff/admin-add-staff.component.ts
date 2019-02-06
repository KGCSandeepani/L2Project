import { Component, OnInit } from '@angular/core';
import { staff } from 'src/app/component/Model/Staff';
import { NgForm } from '@angular/forms';
//import { AdminAddStudentServiceService } from 'src/app/component/Services/admin-add-student-service.service';
import { AdminAddStaffServiceService } from 'src/app/component/Services/admin-add-staff-service.service';
import { NgxNotificationService } from 'ngx-notification';
import {UserListService } from '../Services/user-list.service';
// import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-admin-add-staff',
  templateUrl: './admin-add-staff.component.html',
  styleUrls: ['./admin-add-staff.component.css']
})
export class AdminAddStaffComponent implements OnInit {
 // private notifier: NotifierService;

  staff:staff[];
  constructor(private staffService : AdminAddStaffServiceService, 
  private ngxNotificationService: NgxNotificationService,private userList:UserListService) { }
  


  ngOnInit() {
  }

  onSubmit(formdata:NgForm){
    // console.log(formdata.value.s_text);
    this.staffService.getSupervisorData(formdata)
    .subscribe((data : staff[] )=> {
        this.staff = data;
        this.userList.sendUserWithCustomId(formdata.value.uname,"Supervisor");

        formdata.reset();    
        this.sendNotification();
    }, error => { 
      this.sendNotification1();
    });

  }

  sendNotification() {
    this.ngxNotificationService.sendMessage('Added Successfully', 'success', 'bottom-right');
  }

  sendNotification1() {
    this.ngxNotificationService.sendMessage('Please fill all the field', 'danger', 'bottom-right');
  }

}
