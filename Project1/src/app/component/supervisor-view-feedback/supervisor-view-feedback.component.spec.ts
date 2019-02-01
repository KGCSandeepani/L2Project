import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorViewFeedbackComponent } from './supervisor-view-feedback.component';

describe('SupervisorViewFeedbackComponent', () => {
  let component: SupervisorViewFeedbackComponent;
  let fixture: ComponentFixture<SupervisorViewFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorViewFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorViewFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
