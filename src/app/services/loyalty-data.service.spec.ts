import { TestBed } from '@angular/core/testing';

import { LoyaltyDataService } from './loyalty-data.service';

describe('LoyaltyDataService', () => {
  let service: LoyaltyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoyaltyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
