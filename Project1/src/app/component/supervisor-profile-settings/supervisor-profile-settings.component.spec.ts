import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorProfileSettingsComponent } from './supervisor-profile-settings.component';

describe('SupervisorProfileSettingsComponent', () => {
  let component: SupervisorProfileSettingsComponent;
  let fixture: ComponentFixture<SupervisorProfileSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorProfileSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
