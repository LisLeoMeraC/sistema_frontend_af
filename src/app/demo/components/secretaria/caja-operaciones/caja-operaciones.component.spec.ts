import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CajaOperacionesComponent } from './caja-operaciones.component';

describe('CajaOperacionesComponent', () => {
  let component: CajaOperacionesComponent;
  let fixture: ComponentFixture<CajaOperacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CajaOperacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CajaOperacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
