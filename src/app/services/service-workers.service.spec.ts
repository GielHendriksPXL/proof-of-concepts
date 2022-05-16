import { TestBed } from '@angular/core/testing';

import { ServiceWorkersService } from './service-workers.service';

describe('ServiceWorkersService', () => {
  let service: ServiceWorkersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceWorkersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
