import { TestBed, inject } from '@angular/core/testing';

import { GetMaxBatchService } from './get-max-batch.service';

describe('GetMaxBatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMaxBatchService]
    });
  });

  it('should be created', inject([GetMaxBatchService], (service: GetMaxBatchService) => {
    expect(service).toBeTruthy();
  }));
});
