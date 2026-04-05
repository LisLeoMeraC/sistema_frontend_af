import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlRaComponent } from './control-ra.component';

describe('ControlRaComponent', () => {
  let component: ControlRaComponent;
  let fixture: ComponentFixture<ControlRaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlRaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlRaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
