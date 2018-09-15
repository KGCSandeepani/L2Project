import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewSupervisorComponent } from './admin-view-supervisor.component';

describe('AdminViewSupervisorComponent', () => {
  let component: AdminViewSupervisorComponent;
  let fixture: ComponentFixture<AdminViewSupervisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewSupervisorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
