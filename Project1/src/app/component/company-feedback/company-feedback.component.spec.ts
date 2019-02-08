import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyFeedbackComponent } from './company-feedback.component';

describe('CompanyFeedbackComponent', () => {
  let component: CompanyFeedbackComponent;
  let fixture: ComponentFixture<CompanyFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
