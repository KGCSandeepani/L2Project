import { TestBed, inject } from '@angular/core/testing';

import { AdminViewCompanyService } from './admin-view-company.service';

describe('AdminViewCompanyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminViewCompanyService]
    });
  });

  it('should be created', inject([AdminViewCompanyService], (service: AdminViewCompanyService) => {
    expect(service).toBeTruthy();
  }));
});
