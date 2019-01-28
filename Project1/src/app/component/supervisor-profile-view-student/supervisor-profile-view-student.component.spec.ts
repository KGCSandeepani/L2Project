import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorProfileViewStudentComponent } from './supervisor-profile-view-student.component';

describe('SupervisorProfileViewStudentComponent', () => {
  let component: SupervisorProfileViewStudentComponent;
  let fixture: ComponentFixture<SupervisorProfileViewStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorProfileViewStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorProfileViewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
