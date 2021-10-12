import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaModificaEmpleadoComponent } from './crea-modifica-empleado.component';

describe('CreaModificaEmpleadoComponent', () => {
  let component: CreaModificaEmpleadoComponent;
  let fixture: ComponentFixture<CreaModificaEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreaModificaEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaModificaEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
