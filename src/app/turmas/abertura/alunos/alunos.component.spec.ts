import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PoModule } from '@po-ui/ng-components';
import { of } from 'rxjs';
import { Aluno } from 'src/app/entities/aluno/aluno.interface';
import { FormaDeIngresso } from 'src/app/entities/aluno/forma-ingresso/ingresso.enum';
import { Turma } from 'src/app/entities/turma/turma.interface';
import { TurmaCriarService } from 'src/app/services/turma/turma-criar.service';
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

  it('deve dar log se conseguir criar uma turma e emitir um evento para ir pro primeiro passo', () => {
    const spyLog = spyOn(console, 'log').and.callThrough();
    const spyFirstStep = spyOn(component['firstStep'], 'emit').and.callThrough();

    component.saveInfoAndFinish();

    expect(spyLog).toHaveBeenCalledWith('Turma criada com sucesso!');
    expect(spyFirstStep).toHaveBeenCalled();
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
