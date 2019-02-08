import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewCompanyFeedbackComponent } from './admin-view-company-feedback.component';

describe('AdminViewCompanyFeedbackComponent', () => {
  let component: AdminViewCompanyFeedbackComponent;
  let fixture: ComponentFixture<AdminViewCompanyFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewCompanyFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewCompanyFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
