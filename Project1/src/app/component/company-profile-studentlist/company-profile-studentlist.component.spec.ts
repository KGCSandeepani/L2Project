import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileStudentlistComponent } from './company-profile-studentlist.component';

describe('CompanyProfileStudentlistComponent', () => {
  let component: CompanyProfileStudentlistComponent;
  let fixture: ComponentFixture<CompanyProfileStudentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProfileStudentlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfileStudentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
