import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaccionesBancoComponent } from './transacciones-banco.component';

describe('TransaccionesBancoComponent', () => {
  let component: TransaccionesBancoComponent;
  let fixture: ComponentFixture<TransaccionesBancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransaccionesBancoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransaccionesBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
