import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PoModule } from '@po-ui/ng-components';
import { alunos } from 'mockserver/alunos/alunos-criar.mock';
import { of } from 'rxjs';
import { Aluno } from 'src/app/entities/aluno/aluno.interface';
import { FormaDeIngresso } from 'src/app/entities/aluno/forma-ingresso/ingresso.enum';
import { Turma } from 'src/app/entities/turma/turma.interface';
import { TurmaCriarService } from 'src/app/services/turma/turma-criar.service';
import { NovaTurma } from 'src/app/shared/mocks/turma-mock';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosComponent } from './alunos.component';
import { AlunosGetAllService } from './services/alunos-get-all.service';
class TurmaCriarServiceMock {
  abrirTurma(turma: Turma) {
    return of({});
  }
}

class AlunosGetAllServiceMock {
  getAllAlunos() {
    return of(alunosMock)
  }
}

describe('O componente Alunos', () => {
  let component: AlunosComponent;
  let fixture: ComponentFixture<AlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AlunosComponent,
        AlunosFormComponent,
      ],
      imports: [
        RouterTestingModule,
        PoModule,
        ReactiveFormsModule,
        CommonModule,
        FormsModule

      ],
      providers: [
        {
          provide: TurmaCriarService,
          useClass: TurmaCriarServiceMock
        },
        {
          provide: AlunosGetAllService,
          useClass: AlunosGetAllServiceMock
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser instanciado', () => {
    expect(component).toBeTruthy();
  });

  it('deve dar log se conseguir criar uma turma', () => {
    const spyLog = spyOn(console, 'log').and.callThrough();
    NovaTurma.alunos = alunosMock;
    NovaTurma.numeroVagas = 2;
    component.alunos.length = 2;
    component.saveInfoAndFinish();
    expect(spyLog).toHaveBeenCalledWith('Turma criada com sucesso!');
  });

  it('deve setar hasErrorOnMultiSelectAlunos como true se tiver mais alunos do q o permitido', () => {
    NovaTurma.numeroVagas = 2;
    component.alunos.length = 3;
    component.saveInfoAndFinish();
    expect(component.hasErrorOnMultiSelectAlunos).toBeTruthy();
  });

  it('deve atualizar a lista de alunos com os dados que recebeu do form', () => {
    spyOn(component, 'updateOptions');
    component.updateOptions(alunosMock);
    expect(component.updateOptions).toHaveBeenCalledWith(alunosMock);
    expect(component.alunosOptions).toEqual([{ label: 'Hugo', value: 1 }]);
  });

  it('deve emitir um evento para voltar para o passo anterior', () => {
    const spyPreviousStep = spyOn(component['previousStep'], 'emit').and.callThrough();
    component.previous();
    expect(spyPreviousStep).toHaveBeenCalled();
  });
});

const alunosMock: Aluno[] = [
  {
    id: 1,
    nome: 'Hugo',
    matricula: 123321,
    formaIngresso: FormaDeIngresso.VESTIBULAR,
    cpf: '123.456.789-00',
    email: 'hugo@teste.com'
  }
]
