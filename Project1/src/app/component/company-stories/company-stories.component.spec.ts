import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyStoriesComponent } from './company-stories.component';

describe('CompanyStoriesComponent', () => {
  let component: CompanyStoriesComponent;
  let fixture: ComponentFixture<CompanyStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
