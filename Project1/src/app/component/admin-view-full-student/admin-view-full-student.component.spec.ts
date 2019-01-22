import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewFullStudentComponent } from './admin-view-full-student.component';

describe('AdminViewFullStudentComponent', () => {
  let component: AdminViewFullStudentComponent;
  let fixture: ComponentFixture<AdminViewFullStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewFullStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewFullStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
