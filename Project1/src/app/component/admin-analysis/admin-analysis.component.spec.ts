import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnalysisComponent } from './admin-analysis.component';

describe('AdminAnalysisComponent', () => {
  let component: AdminAnalysisComponent;
  let fixture: ComponentFixture<AdminAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
