import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileHomeComponent } from './company-profile-home.component';

describe('CompanyProfileHomeComponent', () => {
  let component: CompanyProfileHomeComponent;
  let fixture: ComponentFixture<CompanyProfileHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProfileHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfileHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
