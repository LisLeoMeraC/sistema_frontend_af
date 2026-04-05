import { TestBed } from '@angular/core/testing';

import { CompraCacaoService } from './compra-cacao.service';

describe('CompraCacaoService', () => {
  let service: CompraCacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompraCacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
