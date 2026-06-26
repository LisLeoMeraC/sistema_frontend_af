import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasCacaoComponent } from './ventas-cacao.component';

describe('VentasCacaoComponent', () => {
  let component: VentasCacaoComponent;
  let fixture: ComponentFixture<VentasCacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentasCacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VentasCacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
