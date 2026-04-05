import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FijacionesComponent } from './fijaciones.component';

describe('FijacionesComponent', () => {
  let component: FijacionesComponent;
  let fixture: ComponentFixture<FijacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FijacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FijacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
