import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PoMultiselectOption, PoSelectOption } from '@po-ui/ng-components';

import {Disciplina} from 'src/app/entities/disciplina/disciplina.interface';
import { DisciplinaGetAllService } from './services/disciplina-get-all.service';
import { DisciplinasCriarService } from './services/disciplinas-criar.service';

import {ProfessoresGetAllService} from '../../../services/professores/professores-get-all.service';
import {Professor} from '../../../entities/professor/professor.interface';
import {ProfessoresCriarService} from '../../../services/professores/professores-criar.service';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {

  disciplinasOptions: PoMultiselectOption[] = [];
  disciplinas: Disciplina[] = [];
  disciplina: Disciplina = {
    sigla: null,
    cargaHoraria: null,
    descricao: null,
    professor: null
  }

  professoresOptions: PoSelectOption[] = [];
  professores: Professor[] = [];
  professor: Professor = {
    nome: null,
    email: null,
    cpf: null,
    titulacao: null,
    disciplinasMinistradas: []
  }

  @Output()
  nextStep: EventEmitter<any> = new EventEmitter();

  constructor(
    private disciplinasGetAllService: DisciplinaGetAllService,
    private professoresGetAllService: ProfessoresGetAllService,
    private professoresCriarService: ProfessoresCriarService,
    private disciplinasCriarService: DisciplinasCriarService
  ) { }

  ngOnInit(): void {
    this.disciplinasGetAllService.getAllDisciplinas()
      .subscribe(disciplinas => {
        this.disciplinas = disciplinas;
        this.disciplinas.map(disciplina => {
          this.disciplinasOptions = [...this.disciplinasOptions, { label: disciplina.descricao, value: disciplina.id }];
      })
    })

    this.professoresGetAllService.getAllProfessores()
      .subscribe(professores => {
        this.professores = professores;
        this.professores.map(professor => {
          this.professoresOptions = [...this.professoresOptions, { label: professor.nome, value: professor.id }];
        })
      })
  }

  criarDisciplina(): void {
    this.disciplinasCriarService.criarDisciplina(this.disciplina)
      .subscribe(() => {
        console.log('Disciplina criada com sucesso!');
      })
  }

  criarProfessor(): void {
    this.professoresCriarService.criarProfessor(this.professor)
      .subscribe(() => {
        console.log('Professor criado com sucesso!')
      });
  }

  next() {
    this.nextStep.emit();
  }
}
