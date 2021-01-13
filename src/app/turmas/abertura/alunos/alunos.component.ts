import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PoMultiselectOption, PoSelectOption } from '@po-ui/ng-components';

import { Aluno } from 'src/app/entities/aluno/aluno.interface';
import { TurmaCriarService } from 'src/app/services/turma/turma-criar.service';
import { FormaDeIngresso } from '../../../entities/aluno/forma-ingresso/ingresso.enum';
import { AlunosCriarService } from './services/alunos-criar.service';
import { NovaTurma } from 'src/app/shared/mocks/turma-mock';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { AlunosGetAllService } from './services/alunos-get-all.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  formaIngressoOptions: PoSelectOption[] = [
    { label: 'ENADE', value: FormaDeIngresso.ENADE },
    { label: 'VESTIBULAR', value: FormaDeIngresso.VESTIBULAR }
  ];

  alunos: Aluno[] = [];

  alunosOptions: PoMultiselectOption[] = [];

  aluno: Aluno = {
    cpf: null,
    email: null,
    nome: null,
    formaIngresso: null,
    matricula: null,
  }

  alunoForm = new FormGroup({
    cpf: new FormControl(),
    email: new FormControl(),
    nome: new FormControl(),
    formaIngresso: new FormControl(),
    matricula: new FormControl(),
  })

  constructor(
    private criarAlunoService: AlunosCriarService,
    private criarTurmaService: TurmaCriarService,
    private alunosGetAllService: AlunosGetAllService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.alunos = this.activatedRoute.snapshot.data['alunos'];
    this.alunos.map(aluno => {
      this.alunosOptions = [...this.alunosOptions, { label: aluno.nome, value: aluno.id }];
    });

    this.alunoForm = this.fb.group({
      cpf: [null, [Validators.required, Validators.pattern(/[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}/)]],
      email: [null, [Validators.required, Validators.email]],
      nome: [null, [Validators.required]],
      formaIngresso: [null, [Validators.required]],
      matricula: [null, [Validators.required, Validators.pattern(/[0-9]{6}/)]],
    });
  }

  criarAluno(): void {
    this.criarAlunoService.criarAluno(this.aluno)
      .pipe(switchMap(() => this.alunosGetAllService.getAllAlunos()))
      .subscribe(alunos => {
        alunos.map(aluno => {
          this.alunosOptions = [...this.alunosOptions, { label: aluno.nome, value: aluno.id }];
        })
      });
  }

  criarTurma(): void {
    this.criarTurmaService.abrirTurma(NovaTurma)
      .subscribe(() => {
        console.log('Turma criada com sucesso!');
      })
  }

  saveInfo(): void {
    NovaTurma.alunos = this.alunos;
    this.criarTurma();
  }

}
