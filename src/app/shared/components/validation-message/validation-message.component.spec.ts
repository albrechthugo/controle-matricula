import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidationMessageComponent } from './validation-message.component';

describe('O componente ValidationMessage', () => {
  let component: ValidationMessageComponent;
  let fixture: ComponentFixture<ValidationMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidationMessageComponent],
      imports: [CommonModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser instanciado', () => {
    expect(component).toBeTruthy();
  });

  it('deve receber uma string e armazená-la na variavel textContent', () => {
    const msg = 'Campo obrigatório';
    component.textContent = msg;
    expect(component.textContent).toEqual('Campo obrigatório');
  });
});
