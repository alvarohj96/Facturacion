import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlAdministradorComponent } from './control-administrador.component';

describe('ControlAdministradorComponent', () => {
  let component: ControlAdministradorComponent;
  let fixture: ComponentFixture<ControlAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlAdministradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
