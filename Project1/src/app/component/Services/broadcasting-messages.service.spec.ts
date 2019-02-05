import { TestBed, inject } from '@angular/core/testing';

import { BroadcastingMessagesService } from './broadcasting-messages.service';

describe('BroadcastingMessagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastingMessagesService]
    });
  });

  it('should be created', inject([BroadcastingMessagesService], (service: BroadcastingMessagesService) => {
    expect(service).toBeTruthy();
  }));
});
