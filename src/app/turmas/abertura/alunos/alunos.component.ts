import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {PoMultiselectOption} from '@po-ui/ng-components';

import {Aluno} from 'src/app/entities/aluno/aluno.interface';
import { AlunosCriarService } from './services/alunos-criar.service';
import { AlunosGetAllService } from './services/alunos-get-all.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  options: PoMultiselectOption[] = [];

  form = this.fb.group({
    cpf: null,
    email: null,
    nome: null,
    formaIngresso: null,
    matricula: null
  })

  alunos: Aluno[] = [];

  aluno: Aluno = {
    cpf: null,
    email: null,
    nome: null,
    formaIngresso: null,
    matricula: null
  }

  constructor(
    private alunosGetAllService: AlunosGetAllService,
    private alunosCriarService: AlunosCriarService,
    private fb: FormBuilder
    ) {}


  ngOnInit(): void {
    this.alunosGetAllService.getAllAlunos().subscribe(alunos => {
      this.alunos = alunos;
      this.alunos.map(aluno => {
        this.options = [...this.options, { label: aluno.nome, value: aluno.id }];
      });
    });
  }

  criarAluno(): void {
    this.alunosCriarService.criarAluno(this.aluno)
      .subscribe(() => console.log('Aluno criado com sucesso!'));
  }
}
