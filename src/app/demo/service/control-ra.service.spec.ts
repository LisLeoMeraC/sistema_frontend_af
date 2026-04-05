import { TestBed } from '@angular/core/testing';

import { ControlRaService } from './control-ra.service';

describe('ControlRaService', () => {
  let service: ControlRaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlRaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
