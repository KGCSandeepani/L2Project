import { TestBed, inject } from '@angular/core/testing';

import { GetNoOfCompanyService } from './get-no-of-company.service';

describe('GetNoOfCompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetNoOfCompanyService]
    });
  });

  it('should be created', inject([GetNoOfCompanyService], (service: GetNoOfCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
