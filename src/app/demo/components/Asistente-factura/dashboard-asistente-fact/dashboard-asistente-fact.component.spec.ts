import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAsistenteFactComponent } from './dashboard-asistente-fact.component';

describe('DashboardAsistenteFactComponent', () => {
  let component: DashboardAsistenteFactComponent;
  let fixture: ComponentFixture<DashboardAsistenteFactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAsistenteFactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardAsistenteFactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
