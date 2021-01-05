import { Component, OnInit } from '@angular/core';
import { PoMultiselectOption } from '@po-ui/ng-components';

import { Aluno } from 'src/app/entities/aluno/aluno.interface';
import { AlunosGetAllService } from './services/alunos-get-all.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos: Aluno[] = [];
  options: PoMultiselectOption[] = [];

  constructor(private alunosGetAllService: AlunosGetAllService) { }

  ngOnInit(): void {
    this.alunosGetAllService.getAllAlunos().subscribe(alunos => {
      this.alunos = alunos;
      this.alunos.map(aluno => {
        this.options = [...this.options, { label: aluno.nome, value: aluno.id }];
      })
    })
  }

}
