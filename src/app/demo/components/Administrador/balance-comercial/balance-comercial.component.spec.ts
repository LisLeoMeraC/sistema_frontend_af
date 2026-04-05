import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceComercialComponent } from './balance-comercial.component';

describe('BalanceComercialComponent', () => {
  let component: BalanceComercialComponent;
  let fixture: ComponentFixture<BalanceComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceComercialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
