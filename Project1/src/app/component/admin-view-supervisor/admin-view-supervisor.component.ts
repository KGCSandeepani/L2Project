import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { staff } from '../Model/Staff';
import { AdminreadstaffService } from 'src/app/component/Services/adminreadstaff.service';
import { AdmindeletestaffService } from 'src/app/component/Services/admindeletestaff.service';
import { ConfirmationDialogServiceService } from 'src/app/component/confirmation-dialog-component/confirmation-dialog-service.service';


@Component({
  selector: 'app-admin-view-supervisor',
  templateUrl: './admin-view-supervisor.component.html',
  styleUrls: ['./admin-view-supervisor.component.css']
})
export class AdminViewSupervisorComponent implements OnInit {
  [x: string]: any;
 

  staff: staff[];
  constructor(private deleteService: AdmindeletestaffService,private readService: AdminreadstaffService,
    private confirmationDialogService: ConfirmationDialogServiceService,private route : ActivatedRoute,private router : Router) { }
  
  

  ngOnInit() {
    this.readService.getData()
    .subscribe(data => this.staff = data);
    console.log(this.staff);
  }


  onDelete(name:string,d:boolean) {
    if(d==true){
      this.deleteService.deleteStaffData(name).subscribe(result=>{
        console.log(result);
        this.ngOnInit();
      },error => console.log('There was an error: ', error))
    }
  }

  public openConfirmationDialog(name) {
    this.confirmationDialogService.confirm('Please confirm..', ' Do you really wish to delete '+name)
    .then((confirmed) => this.onDelete(name,confirmed))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

}
