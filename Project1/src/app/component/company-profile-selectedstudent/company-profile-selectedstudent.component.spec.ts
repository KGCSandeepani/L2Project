import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileSelectedstudentComponent } from './company-profile-selectedstudent.component';

describe('CompanyProfileSelectedstudentComponent', () => {
  let component: CompanyProfileSelectedstudentComponent;
  let fixture: ComponentFixture<CompanyProfileSelectedstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProfileSelectedstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfileSelectedstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
