import { TestBed } from '@angular/core/testing';

import { FundService } from './fund.service';

describe('FundServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FundService = TestBed.get(FundService);
    expect(service).toBeTruthy();
  });
});
