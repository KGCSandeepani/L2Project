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

  doInternship = 'yes';

  constructor(private data : DataPassService) { }

  ngOnInit() {
    this.value = this.data.getMessage();
  }

  onChange(event : any){
    this.doInternship = event.target.value;
    
    if(this.doInternship=='yes'){
      console.log(this.doInternship);
      
    }
    if(this.doInternship=='no'){
      console.log(this.doInternship);
    }
  }

}
