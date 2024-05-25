import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenHorasComponent } from './resumen-horas.component';

describe('ResumenHorasComponent', () => {
  let component: ResumenHorasComponent;
  let fixture: ComponentFixture<ResumenHorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenHorasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumenHorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
