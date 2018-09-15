import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private route : ActivatedRoute,private router : Router) { }

  ngOnInit() {    
  }

  adminLogin(uname,psw){
    if (uname=='admin' && psw=='admin'){
      this.router.navigate(['/adminHomePage']);
    }
  }

}
