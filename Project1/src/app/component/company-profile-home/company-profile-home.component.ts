import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../Services/data-pass.service';

@Component({
  selector: 'app-company-profile-home',
  templateUrl: './company-profile-home.component.html',
  styleUrls: ['./company-profile-home.component.css']
})
export class CompanyProfileHomeComponent implements OnInit {

  KEY = 'logger';
  value: string ;

  constructor(private data : DataPassService) { }

  ngOnInit() {
    this.value = this.data.getMessage();
  }

}
