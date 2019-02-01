import { Component, OnInit } from '@angular/core';
import { AdminViewCompanyService } from 'src/app/component/Services/admin-view-company.service';
import { company } from 'src/app/component/Model/Company';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  company: Array<company>=[];
  comCount=0;
  constructor(private readCompanyService: AdminViewCompanyService) { }

  ngOnInit() {

    this.readCompanyService.getData()
    .subscribe(data => {this.company = data;
      this.company.forEach(element => {
        if (element.doInternship) {
          this.comCount++;
        }
      });
    });

  }

}
