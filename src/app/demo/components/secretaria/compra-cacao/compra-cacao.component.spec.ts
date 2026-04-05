import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraCacaoComponent } from './compra-cacao.component';

describe('CompraCacaoComponent', () => {
  let component: CompraCacaoComponent;
  let fixture: ComponentFixture<CompraCacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompraCacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompraCacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
