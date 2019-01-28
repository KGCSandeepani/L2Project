import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorProfileViewFullStudentComponent } from './supervisor-profile-view-full-student.component';

describe('SupervisorProfileViewFullStudentComponent', () => {
  let component: SupervisorProfileViewFullStudentComponent;
  let fixture: ComponentFixture<SupervisorProfileViewFullStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorProfileViewFullStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorProfileViewFullStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
