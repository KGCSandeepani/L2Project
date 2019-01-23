import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyViewStuFullComponent } from './company-view-stu-full.component';

describe('CompanyViewStuFullComponent', () => {
  let component: CompanyViewStuFullComponent;
  let fixture: ComponentFixture<CompanyViewStuFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyViewStuFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyViewStuFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
