import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedASComponent } from './feed-a-s.component';

describe('FeedASComponent', () => {
  let component: FeedASComponent;
  let fixture: ComponentFixture<FeedASComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedASComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
