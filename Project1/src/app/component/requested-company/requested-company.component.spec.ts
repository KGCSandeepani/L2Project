import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedCompanyComponent } from './requested-company.component';

describe('RequestedCompanyComponent', () => {
  let component: RequestedCompanyComponent;
  let fixture: ComponentFixture<RequestedCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
