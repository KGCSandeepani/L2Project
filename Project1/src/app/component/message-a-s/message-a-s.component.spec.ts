import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageASComponent } from './message-a-s.component';

describe('MessageASComponent', () => {
  let component: MessageASComponent;
  let fixture: ComponentFixture<MessageASComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageASComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
