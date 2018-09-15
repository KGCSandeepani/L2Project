import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent implements OnInit {

  constructor(private route : ActivatedRoute,private router : Router) { }

  ngOnInit() {
  }

  addStudent(){
    this.router.navigate(['adminAddStudent'], { relativeTo: this.route });
  }
}
