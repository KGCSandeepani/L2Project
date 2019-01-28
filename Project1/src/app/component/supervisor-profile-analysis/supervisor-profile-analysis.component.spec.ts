import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorProfileAnalysisComponent } from './supervisor-profile-analysis.component';

describe('SupervisorProfileAnalysisComponent', () => {
  let component: SupervisorProfileAnalysisComponent;
  let fixture: ComponentFixture<SupervisorProfileAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorProfileAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorProfileAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
