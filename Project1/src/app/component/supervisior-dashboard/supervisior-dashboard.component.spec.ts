import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisiorDashboardComponent } from './supervisior-dashboard.component';

describe('SupervisiorDashboardComponent', () => {
  let component: SupervisiorDashboardComponent;
  let fixture: ComponentFixture<SupervisiorDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisiorDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisiorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
