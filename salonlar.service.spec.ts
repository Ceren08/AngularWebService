import { TestBed } from '@angular/core/testing';

import { SalonlarService } from './salonlar.service';

describe('SalonlarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalonlarService = TestBed.get(SalonlarService);
    expect(service).toBeTruthy();
  });
});
