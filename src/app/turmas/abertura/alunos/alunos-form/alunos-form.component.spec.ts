import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PoModule } from '@po-ui/ng-components';
import { of, throwError } from 'rxjs';
import { Aluno } from 'src/app/entities/aluno/aluno.interface';
import { FormaDeIngresso } from 'src/app/entities/aluno/forma-ingresso/ingresso.enum';
import { ValidationMessageModule } from 'src/app/shared/components/validation-message/validation-message.module';
import { AlunosCriarService } from '../services/alunos-criar.service';
import { AlunosGetAllService } from '../services/alunos-get-all.service';
import { AlunosFormComponent } from './alunos-form.component';

class AlunosCriarServiceMock {
  criarAluno(aluno: Aluno) {
    return of({});
  }
}
class AlunosGetAllServiceMock {
  getAllAlunos() {
    return of([
      {
        cpf: '123.456.789-00',
        email: 'hugo@teste.com',
        nome: 'Hugo',
        formaIngresso: 'Vestibular',
        matricula: 123321,
        id: 1
      }
    ]);
  }
}

describe('O componente AlunosForm', () => {
  let component: AlunosFormComponent;
  let fixture: ComponentFixture<AlunosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlunosFormComponent],
      imports: [
        ReactiveFormsModule,
        PoModule,
        CommonModule,
        ValidationMessageModule
      ],
      providers: [
        { provide: AlunosCriarService, useClass: AlunosCriarServiceMock },
        { provide: AlunosGetAllService, useClass: AlunosGetAllServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.alunoForm.get('cpf').setValue('123.456.789-00');
    component.alunoForm.get('email').setValue('hugo@teste.com');
    component.alunoForm.get('nome').setValue('Hugo');
    component.alunoForm.get('formaIngresso').setValue(FormaDeIngresso.VESTIBULAR);
    component.alunoForm.get('matricula').setValue(123321);
  });

  it('deve ser instanciado', () => {
    expect(component).toBeTruthy();
  });

  it('deve criar um aluno e preencher a lista de alunos se o form for valido', () => {
    component.criarAluno();
    expect(component.alunosOptions).toEqual([{ label: 'Hugo', value: 1 }]);
  });

  it('deve setar hasError como true se o formulario estiver invalido', () => {
    component.alunoForm.get('cpf').setValue(1);

    component.criarAluno();
    expect(component.hasError).toBeTruthy();
  });

  it('deve emitir a lista atualizada para o pai', () => {
    const spy = spyOn(component['listaAlunos'], 'emit').and.callThrough();

    component.criarAluno();

    expect(spy).toHaveBeenCalled();
  });

  it('deve resetar o formulario se o mesmo estiver valido apos criar o aluno', () => {
    const spy = spyOn(component['alunoForm'], 'reset').and.callThrough();

    component.criarAluno();

    expect(spy).toHaveBeenCalled();
  });

  it('deve dar log no console caso o servico retorne um erro', () => {
    const spyLog = spyOn(console, 'log');

    spyOn(component['alunosGetAllService'], 'getAllAlunos').and.returnValue(
      throwError('Erro de servidor')
    );

    component.criarAluno();

    expect(spyLog).toHaveBeenCalledWith('Erro de servidor');
  });

});
