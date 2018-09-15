import { TestBed, inject } from '@angular/core/testing';

import { ReadUnamePswServiceService } from './read-uname-psw-service.service';

describe('ReadUnamePswServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadUnamePswServiceService]
    });
  });

  it('should be created', inject([ReadUnamePswServiceService], (service: ReadUnamePswServiceService) => {
    expect(service).toBeTruthy();
  }));
});
