import { Component, OnInit } from '@angular/core';
import { AdminViewCompanyService } from 'src/app/component/Services/admin-view-company.service';
import { company } from 'src/app/component/Model/Company';

@Component({
  selector: 'app-student-campany-list',
  templateUrl: './student-campany-list.component.html',
  styleUrls: ['./student-campany-list.component.css']
})
export class StudentCampanyListComponent implements OnInit {

  company: company[];

  constructor(private readService: AdminViewCompanyService) { }

  ngOnInit() {
    this.readService.getData()
    .subscribe(data => this.company = data);
    console.log(this.company);
  }

}
