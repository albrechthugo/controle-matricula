import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PoModule } from '@po-ui/ng-components';

import { AberturaComponent } from './abertura.component';

describe('O componente Abertura', () => {
  let component: AberturaComponent;
  let fixture: ComponentFixture<AberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AberturaComponent],
      imports: [
        PoModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser instanciado', () => {
    expect(component).toBeTruthy();
  });
});
