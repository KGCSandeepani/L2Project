import { TestBed, inject } from '@angular/core/testing';

import { GetOneCompanyService } from './get-one-company.service';

describe('GetOneCompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetOneCompanyService]
    });
  });

  it('should be created', inject([GetOneCompanyService], (service: GetOneCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
