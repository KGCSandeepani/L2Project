import { TestBed, inject } from '@angular/core/testing';

import { AuthChatASService } from './auth-chat-a-s.service';

describe('AuthChatASService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthChatASService]
    });
  });

  it('should be created', inject([AuthChatASService], (service: AuthChatASService) => {
    expect(service).toBeTruthy();
  }));
});
