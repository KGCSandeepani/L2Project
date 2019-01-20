import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySignupSuccessComponent } from './company-signup-success.component';

describe('CompanySignupSuccessComponent', () => {
  let component: CompanySignupSuccessComponent;
  let fixture: ComponentFixture<CompanySignupSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanySignupSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanySignupSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
