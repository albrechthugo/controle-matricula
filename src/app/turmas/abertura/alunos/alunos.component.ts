import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PoMultiselectOption } from '@po-ui/ng-components';
import { ActivatedRoute } from '@angular/router';

import { Aluno } from 'src/app/entities/aluno/aluno.interface';
import { TurmaCriarService } from 'src/app/services/turma/turma-criar.service';
import { NovaTurma } from 'src/app/shared/mocks/turma-mock';
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

  alunos: Aluno[] = [];
  alunosOptions: PoMultiselectOption[] = [];

  constructor(
    private criarTurmaService: TurmaCriarService,
    private activatedRoute: ActivatedRoute,
  ) {}


  ngOnInit(): void {
    this.alunos = this.activatedRoute.snapshot.data['alunos'];
    this.alunos.map(aluno => {
      this.alunosOptions = [...this.alunosOptions, { label: aluno.nome, value: aluno.id }];
    });
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

  saveInfoAndFinish(): void {
    NovaTurma.alunos = this.alunos;

    if(NovaTurma.alunos.length) {
      this.criarTurma();
    }

    this.redirectToFirstStep();
  }

  previous(): void {
    this.previousStep.emit();
  }

  redirectToFirstStep(): void {
    this.firstStep.emit();
  }

}
