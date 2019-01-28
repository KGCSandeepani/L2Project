import { TestBed, inject } from '@angular/core/testing';

import { SupervisorChangePasswordServiceService } from './supervisor-change-password-service.service';

describe('SupervisorChangePasswordServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupervisorChangePasswordServiceService]
    });
  });

  it('should be created', inject([SupervisorChangePasswordServiceService], (service: SupervisorChangePasswordServiceService) => {
    expect(service).toBeTruthy();
  }));
});
