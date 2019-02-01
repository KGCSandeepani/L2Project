import { TestBed, inject } from '@angular/core/testing';

import { AdminAddBatchService } from './admin-add-batch.service';

describe('AdminAddBatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAddBatchService]
    });
  });

  it('should be created', inject([AdminAddBatchService], (service: AdminAddBatchService) => {
    expect(service).toBeTruthy();
  }));
});
