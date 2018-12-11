import { Component, OnInit } from '@angular/core';
import { DataPassService } from '../Services/data-pass.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  KEY = 'logger';
  value: string ;
  displayButton : boolean = false;

  message : string;
  constructor(private data : DataPassService,private router : Router) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.value = this.data.getMessage();
    if(this.data.getMessage()!=null)
      this.displayButton=true;
    else
      this.displayButton=false;
  }

  logout(){
    sessionStorage.clear();
    this.displayButton=false;
    this.router.navigate(['/login']);
    location.reload();
  }

}
