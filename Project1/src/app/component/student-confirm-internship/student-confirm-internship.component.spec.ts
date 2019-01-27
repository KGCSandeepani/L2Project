import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentConfirmInternshipComponent } from './student-confirm-internship.component';

describe('StudentConfirmInternshipComponent', () => {
  let component: StudentConfirmInternshipComponent;
  let fixture: ComponentFixture<StudentConfirmInternshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentConfirmInternshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentConfirmInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
