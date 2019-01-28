import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorProfileHomeComponent } from './supervisor-profile-home.component';

describe('SupervisorProfileHomeComponent', () => {
  let component: SupervisorProfileHomeComponent;
  let fixture: ComponentFixture<SupervisorProfileHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorProfileHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorProfileHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
