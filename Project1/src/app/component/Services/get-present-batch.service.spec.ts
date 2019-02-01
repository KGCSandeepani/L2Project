import { TestBed, inject } from '@angular/core/testing';

import { GetPresentBatchService } from './get-present-batch.service';

describe('GetPresentBatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPresentBatchService]
    });
  });

  it('should be created', inject([GetPresentBatchService], (service: GetPresentBatchService) => {
    expect(service).toBeTruthy();
  }));
});
