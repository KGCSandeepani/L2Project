import { TestBed, inject } from '@angular/core/testing';

import { AdmindeletestaffService } from './admindeletestaff.service';

describe('AdmindeletestaffService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmindeletestaffService]
    });
  });

  it('should be created', inject([AdmindeletestaffService], (service: AdmindeletestaffService) => {
    expect(service).toBeTruthy();
  }));
});
