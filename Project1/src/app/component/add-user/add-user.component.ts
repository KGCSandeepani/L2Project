import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  selectedUser = 'student';
  constructor(private route : ActivatedRoute,private router : Router) { }

  ngOnInit() {
    this.router.navigate(['adminAddStudent'], { relativeTo: this.route });
  }

  onUserChange(event : any){
    this.selectedUser = event.target.value;
    
    if(this.selectedUser=='student'){
      this.router.navigate(['adminAddStudent'], { relativeTo: this.route });
      
    }
    if(this.selectedUser=='staff'){
      this.router.navigate(['adminAddStaff'], { relativeTo: this.route });
    }
  }
}
