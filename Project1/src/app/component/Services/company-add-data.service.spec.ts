import { TestBed, inject } from '@angular/core/testing';

import { CompanyAddDataService } from './company-add-data.service';

describe('CompanyAddDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompanyAddDataService]
    });
  });

  it('should be created', inject([CompanyAddDataService], (service: CompanyAddDataService) => {
    expect(service).toBeTruthy();
  }));
});
