import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddStaffComponent } from './admin-add-staff.component';

describe('AdminAddStaffComponent', () => {
  let component: AdminAddStaffComponent;
  let fixture: ComponentFixture<AdminAddStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAddStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
