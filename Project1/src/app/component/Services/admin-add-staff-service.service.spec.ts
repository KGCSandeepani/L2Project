import { TestBed, inject } from '@angular/core/testing';

import { AdminAddStaffServiceService } from './admin-add-staff-service.service';

describe('AdminAddStaffServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAddStaffServiceService]
    });
  });

  it('should be created', inject([AdminAddStaffServiceService], (service: AdminAddStaffServiceService) => {
    expect(service).toBeTruthy();
  }));
});
