import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatASComponent } from './chat-a-s.component';

describe('ChatASComponent', () => {
  let component: ChatASComponent;
  let fixture: ComponentFixture<ChatASComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatASComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
