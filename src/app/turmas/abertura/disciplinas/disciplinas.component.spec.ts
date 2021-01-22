import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { PoModule } from '@po-ui/ng-components';
import { Disciplina } from 'src/app/entities/disciplina/disciplina.interface';
import { Professor } from 'src/app/entities/professor/professor.interface';
import { Titulacao } from 'src/app/entities/professor/titulacao/titulacao.enum';
import { NovaTurma } from 'src/app/shared/mocks/turma-mock';

import { DisciplinasComponent } from './disciplinas.component';

describe('O componente Disciplinas', () => {
  let component: DisciplinasComponent;
  let fixture: ComponentFixture<DisciplinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisciplinasComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { data: { 'disciplinas': disciplinasMock } } }
        }
      ],
      imports: [
        PoModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser instanciado', () => {
    expect(component).toBeTruthy();
  });

  it('deve atualizar a lista de disciplinas com os dados que recebeu do form', () => {
    spyOn(component, 'updateDisciplinasOptions');
    component.updateDisciplinasOptions(disciplinasMock);
    expect(component.updateDisciplinasOptions).toHaveBeenCalledWith(disciplinasMock);
    expect(component.disciplinasOptions).toEqual([{ label: 'Algoritmos', value: 1 }]);
  });

  it('deve emitir o evento para redirecionar pro passo anterior', () => {
    const spyPreviousStep = spyOn(component['previousStep'], 'emit').and.callThrough();
    component.previous();
    expect(spyPreviousStep).toHaveBeenCalled();
  });

  it('deve emitir um evento para avancar pro proximo passo', () => {
    const spyNextStep = spyOn(component['nextStep'], 'emit').and.callThrough();
    component.next();
    expect(spyNextStep).toHaveBeenCalled();
  });

  it('deve salvar as informacoes no objeto', () => {
    spyOn(component, 'saveInfo');
    component.next();
    expect(component.saveInfo).toHaveBeenCalled();
  });
});

const professorMock: Professor = {
  id: 1,
  nome: 'Hugo',
  cpf: '123.456.789-00',
  email: 'hugo@teste.com',
  disciplinasMinistradas: [],
  titulacao: Titulacao.MESTRE
}

const disciplinasMock: Disciplina[] = [
  {
    id: 1,
    sigla: 'AGT',
    descricao: 'Algoritmos',
    cargaHoraria: 20,
    professor: professorMock
  }
]
