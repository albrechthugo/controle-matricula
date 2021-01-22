import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PoModule } from '@po-ui/ng-components';
import { of, throwError } from 'rxjs';
import { Disciplina } from 'src/app/entities/disciplina/disciplina.interface';
import { Professor } from 'src/app/entities/professor/professor.interface';
import { Titulacao } from 'src/app/entities/professor/titulacao/titulacao.enum';
import { ProfessoresCriarService } from 'src/app/services/professores/professores-criar.service';
import { ProfessoresEditarService } from 'src/app/services/professores/professores-editar.service';
import { ProfessoresGetAllService } from 'src/app/services/professores/professores-get-all.service';
import { ProfessoresGetByIdService } from 'src/app/services/professores/professores-get-by-id.service';
import { ValidationMessageModule } from 'src/app/shared/components/validation-message/validation-message.module';
import { DisciplinaGetAllService } from '../services/disciplina-get-all.service';
import { DisciplinasCriarService } from '../services/disciplinas-criar.service';

import { DisciplinaFormComponent } from './disciplina-form.component';

class DisciplinasCriarServiceMock {
  criarDisciplina(disciplina: Disciplina) {
    return of(disciplinasMock[0])
  }
}

class DisciplinaGetAllServiceMock {
  getAllDisciplinas() {
    return of(disciplinasMock)
  }
}

class ProfessoresCriarServiceMock {
  criarProfessor(professor: Professor) {
    return of(professoresMock[0])
  }
}

class ProfessoresGetAllServiceMock {
  getAllProfessores() {
    return of(professoresMock)
  }
}

class ProfessoresEditarServiceMock {
  editarProfessor(professor: Professor) {
    return of(professoresMock[0])
  }
}

class ProfessoresGetByIdServiceMock {
  professorGetById(id: number) {
    return of(professoresMock[0])
  }
}

describe('O componente DisciplinaForm', () => {
  let component: DisciplinaFormComponent;
  let fixture: ComponentFixture<DisciplinaFormComponent>;
  let spyLog;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisciplinaFormComponent],
      imports: [
        RouterTestingModule,
        PoModule,
        ValidationMessageModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { data: { 'professores': professoresMock } } }
        },
        {
          provide: DisciplinasCriarService,
          useClass: DisciplinasCriarServiceMock
        },
        {
          provide: DisciplinaGetAllService,
          useClass: DisciplinaGetAllServiceMock
        },
        {
          provide: ProfessoresCriarService,
          useClass: ProfessoresCriarServiceMock
        },
        {
          provide: ProfessoresGetAllService,
          useClass: ProfessoresGetAllServiceMock
        },
        {
          provide: ProfessoresEditarService,
          useClass: ProfessoresEditarServiceMock
        },
        {
          provide: ProfessoresGetByIdService,
          useClass: ProfessoresGetByIdServiceMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    spyLog = spyOn(console, 'log').and.callThrough();

    component.disciplinaForm.get('sigla').setValue('AGT');
    component.disciplinaForm.get('cargaHoraria').setValue(20);
    component.disciplinaForm.get('descricao').setValue('Algoritmos');
    component.disciplinaForm.get('professor').setValue('João Cléber');

    component.professorForm.get('nome').setValue('Lorrayne de Hahaha');
    component.professorForm.get('email').setValue('lorrayne@hotmal.com');
    component.professorForm.get('cpf').setValue('123.456.789-00');
    component.professorForm.get('titulacao').setValue(Titulacao.MESTRE);
  });

  it('deve ser instanciado', () => {
    expect(component).toBeTruthy();
  });

  it('deve emitir a lista atualizada de disciplinas pro pai', () => {
    const spy = spyOn(component['listaDisciplinasOptions'], 'emit').and.callThrough();
    component.criarDisciplina();
    expect(spy).toHaveBeenCalled();
  });

  xit('deve resetar o formulario de disciplinas se o mesmo estiver valido apos criar o aluno', () => {
    const spy = spyOn(component['disciplinasForm'], 'reset').and.callThrough();
    component.criarDisciplina();
    expect(spy).toHaveBeenCalled();
  });

  it('deve setar hasErrorOnDisciplinaForm como true caso form seja invalido', () => {
    component.disciplinaForm.get('sigla').setValue(null);
    component.criarDisciplina();
    expect(component.hasErrorOnDisciplinaForm).toBeTruthy();
  });

  it('deve emitir msg de erro no console caso de erro no servico getAllDisciplinas', () => {
    spyOn(component['disciplinaGetAllService'], 'getAllDisciplinas').and.returnValue(
      throwError('Erro de servidor')
    );

    component.criarDisciplina();
    expect(spyLog).toHaveBeenCalledWith('Erro de servidor');
  });

  it('deve resetar o formulario de professores se o mesmo estiver valido apos criar o aluno', () => {
    const spy = spyOn(component['professorForm'], 'reset').and.callThrough();
    component.criarProfessor();
    expect(spy).toHaveBeenCalled();
  });

  it('deve setar hasErrorOnProfessorForm como true caso form seja invalido', () => {
    component.professorForm.get('nome').setValue(null);
    component.criarProfessor();
    expect(component.hasErrorOnProfessorForm).toBeTruthy();
  });

  it('deve emitir msg de erro no console caso de erro no servico getAllProfessores', () => {
    spyOn(component['professoresGetAllService'], 'getAllProfessores').and.returnValue(
      throwError('Erro de servidor')
    );

    component.criarProfessor();
    expect(spyLog).toHaveBeenCalledWith('Erro de servidor');
  });

  it('deve mostrar mensagem de sucesso quando editar professor', () => {
    component.criarDisciplina();
    expect(spyLog).toHaveBeenCalledWith('Relacionou e editou no banco');
  });
});

const professoresMock: Professor[] = [
  {
    id: 1,
    nome: 'Hugo',
    cpf: '123.456.789-00',
    email: 'hugo@teste.com',
    disciplinasMinistradas: [],
    titulacao: Titulacao.MESTRE
  }
]

const disciplinasMock: Disciplina[] = [
  {
    id: 1,
    sigla: 'AGT',
    descricao: 'Algoritmos',
    cargaHoraria: 20,
    professor: professoresMock[0]
  }
]
