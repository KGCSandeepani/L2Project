import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../Services/data-pass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  loger: string ;
  message : string;

  constructor(private data : DataPassService,private router : Router) { }

  ngOnInit() {
    this.loger = this.data.getMessage();
  }

  logout(){
    sessionStorage.clear();    
    this.router.navigate(['/login']);
  }
  
}
