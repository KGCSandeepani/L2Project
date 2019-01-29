import { TestBed, inject } from '@angular/core/testing';

import { StdentAvailabilityChangeService } from './stdent-availability-change.service';

describe('StdentAvailabilityChangeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StdentAvailabilityChangeService]
    });
  });

  it('should be created', inject([StdentAvailabilityChangeService], (service: StdentAvailabilityChangeService) => {
    expect(service).toBeTruthy();
  }));
});
