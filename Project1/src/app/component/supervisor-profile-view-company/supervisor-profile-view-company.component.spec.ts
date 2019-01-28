import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorProfileViewCompanyComponent } from './supervisor-profile-view-company.component';

describe('SupervisorProfileViewCompanyComponent', () => {
  let component: SupervisorProfileViewCompanyComponent;
  let fixture: ComponentFixture<SupervisorProfileViewCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorProfileViewCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorProfileViewCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
