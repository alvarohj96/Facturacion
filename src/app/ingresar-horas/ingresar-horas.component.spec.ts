import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarHorasComponent } from './ingresar-horas.component';

describe('IngresarHorasComponent', () => {
  let component: IngresarHorasComponent;
  let fixture: ComponentFixture<IngresarHorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarHorasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
