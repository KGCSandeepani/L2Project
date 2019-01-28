import { Component, OnInit } from '@angular/core';
import { SupervisorChangePasswordServiceService} from '../Services/supervisor-change-password-service.service';
import { DataPassService } from '../Services/data-pass.service';
import { Router } from '@angular/router';
import { NgxNotificationService } from 'ngx-notification';

@Component({
  selector: 'app-supervisor-profile-settings',
  templateUrl: './supervisor-profile-settings.component.html',
  styleUrls: ['./supervisor-profile-settings.component.css']
})
export class SupervisorProfileSettingsComponent implements OnInit {
  loger: string ;
  message : string;

  constructor(private ngxNotificationService: NgxNotificationService,
              private data : DataPassService,
              private router : Router, 
              private changePasswordService :SupervisorChangePasswordServiceService  ) { }

  ngOnInit() {
    this.loger = this.data.getMessage();
  }
  
  changePassword(password :String,password1 : String){
    if (password==password1 && password.length==8) {
      this.changePasswordService.updateSupervisorData(this.loger,password)
      .subscribe(data =>{
        this.sendNotification();
      });
    } else {
      this.sendNotification1();
    }
  }

  sendNotification() {
    this.ngxNotificationService.sendMessage('Successful change password', 'dark', 'bottom-right');
    //dark, light, success, info, warning, danger and none
    //top-left, top-right, bottom-left, bottom-right and center
  }

  sendNotification1() {
    this.ngxNotificationService.sendMessage('Unable to change password', 'dark', 'bottom-right');
  }


}
