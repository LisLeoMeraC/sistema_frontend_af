import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasSemanalesComponent } from './compras-semanales.component';

describe('ComprasSemanalesComponent', () => {
  let component: ComprasSemanalesComponent;
  let fixture: ComponentFixture<ComprasSemanalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprasSemanalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprasSemanalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
