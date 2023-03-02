import { TestBed } from '@angular/core/testing';

import { ServiceExaService } from './service-exa.service';

describe('ServiceExaService', () => {
  let service: ServiceExaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceExaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
