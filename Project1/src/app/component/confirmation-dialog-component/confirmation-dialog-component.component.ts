import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminRejectTempCompanyService } from 'src/app/component/Services/admin-reject-temp-company.service';

@Component({
  selector: 'app-confirmation-dialog-component',
  templateUrl: './confirmation-dialog-component.component.html',
  styleUrls: ['./confirmation-dialog-component.component.css']
})
export class ConfirmationDialogComponentComponent implements OnInit {

  @Input() title: string;
  @Input() message: string;
  @Input() btnOkText: string;
  @Input() btnCancelText: string;
  name:string;

  constructor(private activeModal: NgbActiveModal,private deleteService: AdminRejectTempCompanyService) { }

  ngOnInit() {
  }

  public decline() {
    this.activeModal.close(false);
  }

  public accept() {
    this.activeModal.close(true);
  }

  public dismiss() {
    this.activeModal.dismiss();
  }

}
