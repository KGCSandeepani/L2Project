import { TestBed, inject } from '@angular/core/testing';

import { ChatServiceASService } from './chat-service-a-s.service';

describe('ChatServiceASService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatServiceASService]
    });
  });

  it('should be created', inject([ChatServiceASService], (service: ChatServiceASService) => {
    expect(service).toBeTruthy();
  }));
});
