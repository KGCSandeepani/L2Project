import { Component, OnInit } from '@angular/core';
import { staff } from 'src/app/component/Model/Staff';
import { NgForm } from '@angular/forms';
//import { AdminAddStudentServiceService } from 'src/app/component/Services/admin-add-student-service.service';
import { AdminAddStaffServiceService } from 'src/app/component/Services/admin-add-staff-service.service';

@Component({
  selector: 'app-admin-add-staff',
  templateUrl: './admin-add-staff.component.html',
  styleUrls: ['./admin-add-staff.component.css']
})
export class AdminAddStaffComponent implements OnInit {

  staff:staff[];
  constructor(private staffService : AdminAddStaffServiceService) { }


  ngOnInit() {
  }

  onSubmit(formdata:NgForm){
    // console.log(formdata.value.s_text);
    this.staffService.getSupervisorData(formdata)
    .subscribe((data : staff[] )=> {
        this.staff = data;
        formdata.reset();    
    });

}

}
