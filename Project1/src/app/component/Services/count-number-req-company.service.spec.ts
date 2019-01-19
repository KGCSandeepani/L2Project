import { TestBed, inject } from '@angular/core/testing';

import { CountNumberReqCompanyService } from './count-number-req-company.service';

describe('CountNumberReqCompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountNumberReqCompanyService]
    });
  });

  it('should be created', inject([CountNumberReqCompanyService], (service: CountNumberReqCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
