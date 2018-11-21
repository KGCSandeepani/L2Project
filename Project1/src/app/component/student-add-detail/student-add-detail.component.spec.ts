import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAddDetailComponent } from './student-add-detail.component';

describe('StudentAddDetailComponent', () => {
  let component: StudentAddDetailComponent;
  let fixture: ComponentFixture<StudentAddDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentAddDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAddDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
