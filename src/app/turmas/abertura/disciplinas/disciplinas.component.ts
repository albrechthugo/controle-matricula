import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PoMultiselectOption, PoSelectOption } from '@po-ui/ng-components';

import { Disciplina } from 'src/app/entities/disciplina/disciplina.interface';

import { Professor } from '../../../entities/professor/professor.interface';
import { Titulacao } from '../../../entities/professor/titulacao/titulacao.enum';
import {DisciplinaGetAllService} from './services/disciplina-get-all.service';
import {ProfessoresCriarService} from '../../../services/professores/professores-criar.service';
import {DisciplinasCriarService} from './services/disciplinas-criar.service';
import {ProfessoresGetAllService} from '../../../services/professores/professores-get-all.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { novaTurma } from 'src/app/shared/mocks/turma-mock';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {

  @Output()
  nextStep: EventEmitter<any> = new EventEmitter();

  disciplinasOptions: PoMultiselectOption[] = [];

  disciplinas: Disciplina[] = [];

  disciplina: Disciplina = {
    sigla: null,
    cargaHoraria: null,
    descricao: null,
    professor: null
  }

  disciplinaForm = new FormGroup({
    sigla: new FormControl(),
    cargaHoraria: new FormControl(),
    descricao: new FormControl(),
    professor: new FormControl()
  });

  professoresOptions: PoSelectOption[] = [];

  professores: Professor[] = [];

  professor: Professor = {
    nome: null,
    email: null,
    cpf: null,
    titulacao: null,
    disciplinasMinistradas: null
  }

  titulacaoProfessorOptions: PoSelectOption[] = [
    { label: 'Mestre', value: Titulacao.MESTRE },
    { label: 'Doutor', value: Titulacao.DOUTOR },
    { label: 'PHD', value: Titulacao.PHD }
  ];

  professorForm = new FormGroup({
    nome: new FormControl(),
    email: new FormControl(),
    cpf: new FormControl(),
    titulacao: new FormControl()
  });

  constructor(
    private criarDisciplinaService: DisciplinasCriarService,
    private getAllDisciplinaService: DisciplinaGetAllService,
    private criarProfessorService: ProfessoresCriarService,
    private getAllProfessorService: ProfessoresGetAllService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getAllDisciplinaService.getAllDisciplinas()
      .subscribe(disciplinas => {
        this.disciplinas = disciplinas;
        this.disciplinas.map(disciplina => {
          this.disciplinasOptions = [...this.disciplinasOptions, { label: disciplina.descricao, value: disciplina.id }];
        })
      });

    this.getAllProfessorService.getAllProfessores()
      .subscribe(professores => {
        this.professores = professores;
        this.professores.map(professor => {
          this.professoresOptions = [...this.professoresOptions, { label: professor.nome, value: professor.id }];
        })
      });
  }

  criarDisciplina(): void {
    this.criarDisciplinaService.criarDisciplina(this.disciplina)
      .subscribe(() => console.log('Disciplina criada com sucesso!'));
  }

  criarProfessor(): void {
    this.criarProfessorService.criarProfessor(this.professor)
      .subscribe(() => console.log('Professor criado com sucesso!'));
  }

  saveInfo(): void {
    novaTurma.disciplinas = this.disciplinas;
  }

  // validateDisciplinaForm(): void {
  //   this.disciplinaForm = this.fb.group({
  //     sigla: [null, [Validators.maxLength(4), Validators.required]],
  //     cargaHoraria: [null, [Validators.maxLength(2), Validators.required]],
  //     descricao: [null, [Validators.maxLength(4), Validators.required]],
  //     professor: [null, Validators.required]
  //   })
  // }

  // validateProfessorForm(): void {
  //   this.professorForm = this.fb.group({
  //     nome: [null, [Validators.maxLength(40), Validators.required]],
  //     email: [null, [Validators.email, Validators.required]],
  //     cpf: [null, [Validators.required, Validators.pattern(/[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}/)]],
  //     titulacao: [null, Validators.required]
  //   })
  // }

  next(): void {
    this.saveInfo();
    this.nextStep.emit();
  }
}
