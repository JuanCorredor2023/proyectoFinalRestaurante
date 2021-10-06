import { TestBed } from '@angular/core/testing';

import { RecepComentService } from './recep-coment.service';

describe('RecepComentService', () => {
  let service: RecepComentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecepComentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
