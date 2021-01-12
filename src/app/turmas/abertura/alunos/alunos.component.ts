import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PoMultiselectOption, PoSelectOption } from '@po-ui/ng-components';

import { Aluno } from 'src/app/entities/aluno/aluno.interface';
import { TurmaCriarService } from 'src/app/services/turma/turma-criar.service';
import { FormaDeIngresso } from '../../../entities/aluno/forma-ingresso/ingresso.enum';
import { AlunosCriarService } from './services/alunos-criar.service';
import { AlunosGetAllService } from './services/alunos-get-all.service';
import { novaTurma } from 'src/app/shared/mocks/turma-mock';
import { switchMap } from 'rxjs/operators';

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
    private getAllAlunoService: AlunosGetAllService,
    private criarTurmaService: TurmaCriarService,
    private fb: FormBuilder
  ) {}


  ngOnInit(): void {
    this.getAllAlunoService.getAllAlunos()
      .subscribe(alunos => {
        this.alunos = alunos;
        this.alunos.map(aluno => {
          this.alunosOptions = [...this.alunosOptions, { label: aluno.nome, value: aluno.id }];
        })
      })
  }

  criarAluno(): void {
    this.criarAlunoService.criarAluno(this.aluno)
      .pipe(switchMap(() => this.getAllAlunoService.getAllAlunos()))
      .subscribe(alunos => {
        alunos.map(aluno => {
          this.alunosOptions = [...this.alunosOptions, { label: aluno.nome, value: aluno.id }];
        })
      });
  }

  // validateAlunoForm(): void {
  //   this.alunoForm = this.fb.group({
  //     cpf: [null, [Validators.required, Validators.pattern(/[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}/)]],
  //     email: [null, [Validators.required, Validators.email]],
  //     nome: [null, [Validators.required]],
  //     formaIngresso: [null, [Validators.required]],
  //     matricula: [null, [Validators.required, Validators.pattern(/[0-9]{6}/)]],
  //   })
  // }

  criarTurma(): void {
    this.criarTurmaService.abrirTurma(novaTurma)
      .subscribe(() => {
        console.log('Turma criada com sucesso!');
      })
  }

  saveInfo(): void {
    novaTurma.alunos = this.alunos;
    this.criarTurma();
  }

}
