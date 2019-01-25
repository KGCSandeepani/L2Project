import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCampanyListComponent } from './student-campany-list.component';

describe('StudentCampanyListComponent', () => {
  let component: StudentCampanyListComponent;
  let fixture: ComponentFixture<StudentCampanyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCampanyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCampanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
