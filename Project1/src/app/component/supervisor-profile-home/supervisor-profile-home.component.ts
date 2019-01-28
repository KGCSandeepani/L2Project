import { Component, OnInit,OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CountNumberReqCompanyService } from 'src/app/component/Services/count-number-req-company.service';
import { DataPassService } from '../Services/data-pass.service';

@Component({
  selector: 'app-supervisor-profile-home',
  templateUrl: './supervisor-profile-home.component.html',
  styleUrls: ['./supervisor-profile-home.component.css']
})
export class SupervisorProfileHomeComponent implements OnInit {
  value:string='';
  count:number=0;          
  loger: string ;
  //displayButton : boolean = false;
  message : string;
  constructor(private data : DataPassService,
              private getCount:CountNumberReqCompanyService,
              private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit() {
    this.getValue(); 
   //this.data.currentMessage.subscribe(message => this.message = message);
   this.loger = this.data.getMessage();
   /*if(this.data.getMessage()!=null)
     this.displayButton=true;
   else
     this.displayButton=false;*/
  }
  logout(){
    sessionStorage.clear();
    //this.displayButton=false;
    this.router.navigate(['/login']);
    //location.reload();
  }

  getValue(){
    this.value = this.getCount.setDetails();
    console.log(this.value);
    this.count = +this.value;
    console.log(this.value);
    
  }

  clearValue(){
   this.getCount.clearDetails();
  }

  clearCount() {
    this.count = 0;
    console.log(this.count);
  }



}
