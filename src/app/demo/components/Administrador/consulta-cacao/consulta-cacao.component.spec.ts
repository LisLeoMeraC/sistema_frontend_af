import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCacaoComponent } from './consulta-cacao.component';

describe('ConsultaCacaoComponent', () => {
  let component: ConsultaCacaoComponent;
  let fixture: ComponentFixture<ConsultaCacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaCacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaCacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
