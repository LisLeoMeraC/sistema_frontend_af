import { TestBed } from '@angular/core/testing';

import { FijacionesService } from './fijaciones.service';

describe('FijacionesService', () => {
  let service: FijacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FijacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
