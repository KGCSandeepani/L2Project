import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewCompanyComponent } from './admin-view-company.component';

describe('AdminViewCompanyComponent', () => {
  let component: AdminViewCompanyComponent;
  let fixture: ComponentFixture<AdminViewCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
