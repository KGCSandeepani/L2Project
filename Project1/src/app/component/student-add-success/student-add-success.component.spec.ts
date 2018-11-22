import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAddSuccessComponent } from './student-add-success.component';

describe('StudentAddSuccessComponent', () => {
  let component: StudentAddSuccessComponent;
  let fixture: ComponentFixture<StudentAddSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAddSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAddSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
