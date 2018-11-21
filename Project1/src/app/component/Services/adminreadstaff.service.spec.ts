import { TestBed, inject } from '@angular/core/testing';

import { AdminreadstaffService } from './adminreadstaff.service';

describe('AdminreadstaffService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminreadstaffService]
    });
  });

  it('should be created', inject([AdminreadstaffService], (service: AdminreadstaffService) => {
    expect(service).toBeTruthy();
  }));
});
