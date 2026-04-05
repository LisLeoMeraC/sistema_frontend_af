import { TestBed } from '@angular/core/testing';

import { IngresoFacturaService } from './ingreso-factura.service';

describe('IngresoFacturaService', () => {
  let service: IngresoFacturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngresoFacturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
