import { TestBed, inject } from '@angular/core/testing';

import { AdminChangeNoOfCompanyService } from './admin-change-no-of-company.service';

describe('AdminChangeNoOfCompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminChangeNoOfCompanyService]
    });
  });

  it('should be created', inject([AdminChangeNoOfCompanyService], (service: AdminChangeNoOfCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
