import { TestBed, inject } from '@angular/core/testing';

import { GetOneTempCompanyService } from './get-one-temp-company.service';

describe('GetOneTempCompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetOneTempCompanyService]
    });
  });

  it('should be created', inject([GetOneTempCompanyService], (service: GetOneTempCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
