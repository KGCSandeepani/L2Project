import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEditDetailComponent } from './student-edit-detail.component';

describe('StudentEditDetailComponent', () => {
  let component: StudentEditDetailComponent;
  let fixture: ComponentFixture<StudentEditDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEditDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEditDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
