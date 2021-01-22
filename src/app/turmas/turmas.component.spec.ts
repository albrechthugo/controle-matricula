import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TurmasComponent } from './turmas.component';

describe('O componente Turmas', () => {
  let component: TurmasComponent;
  let fixture: ComponentFixture<TurmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TurmasComponent],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser instanciado', () => {
    expect(component).toBeTruthy();
  });
});
