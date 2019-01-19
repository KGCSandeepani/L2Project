import { Component, OnInit,OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CountNumberReqCompanyService } from 'src/app/component/Services/count-number-req-company.service';


@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  constructor(private getCount:CountNumberReqCompanyService,private route : ActivatedRoute,private router : Router) { }

  value:string='';
  count:number=0;

  ngOnInit() {

   this.getValue(); 

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

  addStudent(){
    this.router.navigate(['adminAddStudent'], { relativeTo: this.route });
  }
  
  clearCount() {
    this.count = 0;
    console.log(this.count);
  }
}
