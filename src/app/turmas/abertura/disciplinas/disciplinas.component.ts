import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PoMultiselectOption, PoSelectOption } from '@po-ui/ng-components';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';

import { Disciplina } from 'src/app/entities/disciplina/disciplina.interface';
import { Professor } from '../../../entities/professor/professor.interface';
import { Titulacao } from '../../../entities/professor/titulacao/titulacao.enum';
import { ProfessoresCriarService } from '../../../services/professores/professores-criar.service';
import { DisciplinasCriarService } from './services/disciplinas-criar.service';
import { NovaTurma } from 'src/app/shared/mocks/turma-mock';
import { ActivatedRoute } from '@angular/router';
import { DisciplinaGetAllService } from './services/disciplina-get-all.service';
import { ProfessoresGetAllService } from 'src/app/services/professores/professores-get-all.service';

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
    private criarProfessorService: ProfessoresCriarService,
    private disciplinaGetAllService: DisciplinaGetAllService,
    private professoresGetAllService: ProfessoresGetAllService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.disciplinas = this.activatedRoute.snapshot.data['disciplinas'];
    this.disciplinas.map(disciplina => {
      this.disciplinasOptions = [...this.disciplinasOptions, { label: disciplina.descricao, value: disciplina.id }];
    });

    this.professores = this.activatedRoute.snapshot.data['professores'];
    this.professores.map(professor => {
      this.professoresOptions = [...this.professoresOptions, { label: professor.nome, value: professor.id }];
    })
  }

  criarDisciplina(): void {
    this.criarDisciplinaService.criarDisciplina(this.disciplina)
      .pipe(switchMap(() => this.disciplinaGetAllService.getAllDisciplinas()))
      .subscribe(disciplinas => {
        disciplinas.map(disciplina =>{
          this.disciplinasOptions = [...this.disciplinasOptions, { label: disciplina.descricao, value: disciplina.id }];
        })
      });
  }

  criarProfessor(): void {
    this.criarProfessorService.criarProfessor(this.professor)
      .pipe(switchMap(() => this.professoresGetAllService.getAllProfessores()))
      .subscribe(professores => {
        professores.map(professor => {
          this.professoresOptions = [...this.professoresOptions, { label: professor.nome, value: professor.id }];
        })
      });
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

  saveInfo(): void {
    NovaTurma.disciplinas = this.disciplinas;
  }

  next(): void {
    this.saveInfo();
    this.nextStep.emit();
  }
}
