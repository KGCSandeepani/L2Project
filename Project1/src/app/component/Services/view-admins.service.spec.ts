import { TestBed, inject } from '@angular/core/testing';

import { ViewAdminsService } from './view-admins.service';

describe('ViewAdminsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewAdminsService]
    });
  });

  it('should be created', inject([ViewAdminsService], (service: ViewAdminsService) => {
    expect(service).toBeTruthy();
  }));
});
