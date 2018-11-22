import { TestBed, inject } from '@angular/core/testing';

import { AdminViewTempCompService } from './admin-view-temp-comp.service';

describe('AdminViewTempCompService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminViewTempCompService]
    });
  });

  it('should be created', inject([AdminViewTempCompService], (service: AdminViewTempCompService) => {
    expect(service).toBeTruthy();
  }));
});
