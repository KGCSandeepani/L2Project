import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileConfirmStudentlistComponent } from './company-profile-confirm-studentlist.component';

describe('CompanyProfileConfirmStudentlistComponent', () => {
  let component: CompanyProfileConfirmStudentlistComponent;
  let fixture: ComponentFixture<CompanyProfileConfirmStudentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProfileConfirmStudentlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfileConfirmStudentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
