import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComprasOtrosProductosComponent } from './view-compras-otros-productos.component';

describe('ViewComprasOtrosProductosComponent', () => {
  let component: ViewComprasOtrosProductosComponent;
  let fixture: ComponentFixture<ViewComprasOtrosProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewComprasOtrosProductosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewComprasOtrosProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
