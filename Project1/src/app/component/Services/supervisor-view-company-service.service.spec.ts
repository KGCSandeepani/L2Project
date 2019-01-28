import { TestBed, inject } from '@angular/core/testing';

import { SupervisorViewCompanyServiceService } from './supervisor-view-company-service.service';

describe('SupervisorViewCompanyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupervisorViewCompanyServiceService]
    });
  });

  it('should be created', inject([SupervisorViewCompanyServiceService], (service: SupervisorViewCompanyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
