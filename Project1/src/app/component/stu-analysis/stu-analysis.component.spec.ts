import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StuAnalysisComponent } from './stu-analysis.component';

describe('StuAnalysisComponent', () => {
  let component: StuAnalysisComponent;
  let fixture: ComponentFixture<StuAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StuAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StuAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
