import { TestBed } from '@angular/core/testing';

import { TokenInterceptor.ServiceService } from './token-interceptor.service.service';

describe('TokenInterceptor.ServiceService', () => {
  let service: TokenInterceptor.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenInterceptor.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
