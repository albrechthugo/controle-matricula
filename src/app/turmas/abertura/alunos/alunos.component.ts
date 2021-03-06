import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PoMultiselectOption } from '@po-ui/ng-components';
import { Aluno } from 'src/app/entities/aluno/aluno.interface';
import { TurmaCriarService } from 'src/app/services/turma/turma-criar.service';
import { NovaTurma } from 'src/app/shared/mocks/turma-mock';
import { AlunosGetAllService } from './services/alunos-get-all.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  @Output()
  firstStep = new EventEmitter<any>();

  @Output()
  previousStep = new EventEmitter<any>();

  hasErrorOnMultiSelectAlunos = false;

  numeroVagasDisponiveis: number;

  alunos: Aluno[] = [];
  alunosOptions: PoMultiselectOption[] = [];

  constructor(
    private criarTurmaService: TurmaCriarService,
    private alunoGetAllService: AlunosGetAllService,
  ) {}


  ngOnInit(): void {
    this.alunoGetAllService.getAllAlunos()
      .subscribe(alunos => {
        this.alunos = alunos;
        this.alunos.map(aluno => {
          this.alunosOptions = [...this.alunosOptions, { label: aluno.nome, value: aluno.id }];
        });
      })
  }

  saveInfoAndFinish(): void {
    NovaTurma.alunos = this.alunos;

    if(NovaTurma.alunos.length && this.alunos.length <= NovaTurma.numeroVagas) {
      this.criarTurma();
      window.location.reload();
    } else {
      this.numeroVagasDisponiveis = NovaTurma.numeroVagas;
      this.hasErrorOnMultiSelectAlunos = true;
    }
  }

  criarTurma(): void {
    this.criarTurmaService.abrirTurma(NovaTurma)
      .subscribe(() => {
        console.log('Turma criada com sucesso!');
      })
  }

  updateOptions(options): void {
    this.alunosOptions = options;
  }

  previous(): void {
    this.previousStep.emit();
  }
}
