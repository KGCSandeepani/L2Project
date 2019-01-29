import { Component, OnInit } from '@angular/core';
import { student } from '../Model/Student';
import { staff } from '../Model/Staff';
import { admin } from '../Model/Admin';
import { ReadUnamePswServiceService } from '../Services/read-uname-psw-service.service';
import { ChatServiceASService } from '../Services/chat-service-a-s.service';
import { MessageASComponent } from '../message-a-s/message-a-s.component';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { AdminreadstaffService } from 'src/app/component/Services/adminreadstaff.service';
import { AdminViewCompanyService } from 'src/app/component/Services/admin-view-company.service';
import { company } from 'src/app/component/Model/Company';
import { ViewAdminsService } from '../Services/view-admins.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  [x: string]: any;

  students: student[];
  supervisors: staff[];
  company: company[];
  admin:admin[];

  constructor(private readServiceCompany: AdminViewCompanyService,
    private readService: ReadUnamePswServiceService, private readServiceStaff: AdminreadstaffService,
    private chatService: ChatServiceASService, private router: Router,
    private readServiceAdmin: ViewAdminsService) { }
  userN: string;
  editUser: string;// to symbolize the change in user
  ngOnInit() {
    this.readService.getData()
      .subscribe(data => this.students = data);
    console.log(this.students);

    //just to view clicked user
    this.chatService.cast.subscribe(userN => this.userN = userN);

    //get supervispr list
    this.readServiceStaff.getData()
      .subscribe(data => this.supervisors = data);
    console.log(this.supervisors);

    //get companies
    this.readServiceCompany.getData()
      .subscribe(data => this.company = data);
    console.log(this.company);

    //get admins
    this.readServiceAdmin.getData()
      .subscribe(data => this.admin = data);
    console.log(this.admin);
  }

  editTheUser(student: any) {

    this.chatService.editUser(student.name);

  }

}
