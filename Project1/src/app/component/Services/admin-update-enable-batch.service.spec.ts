import { TestBed, inject } from '@angular/core/testing';

import { AdminUpdateEnableBatchService } from './admin-update-enable-batch.service';

describe('AdminUpdateEnableBatchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminUpdateEnableBatchService]
    });
  });

  it('should be created', inject([AdminUpdateEnableBatchService], (service: AdminUpdateEnableBatchService) => {
    expect(service).toBeTruthy();
  }));
});
