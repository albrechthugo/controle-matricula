import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PoMultiselectOption, PoSelectOption } from '@po-ui/ng-components';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { Disciplina } from 'src/app/entities/disciplina/disciplina.interface';
import { Professor } from '../../../entities/professor/professor.interface';
import { Titulacao } from '../../../entities/professor/titulacao/titulacao.enum';
import { ProfessoresCriarService } from '../../../services/professores/professores-criar.service';
import { DisciplinasCriarService } from './services/disciplinas-criar.service';
import { NovaTurma } from 'src/app/shared/mocks/turma-mock';
import { ActivatedRoute } from '@angular/router';
import { DisciplinaGetAllService } from './services/disciplina-get-all.service';
import { ProfessoresGetAllService } from 'src/app/services/professores/professores-get-all.service';
import { ProfessoresEditarService } from 'src/app/services/professores/professores-editar.service';
import { ProfessoresGetByIdService } from 'src/app/services/professores/professores-get-by-id.service';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {

  @Output()
  nextStep: EventEmitter<any> = new EventEmitter();

  hasErrorOnProfessorForm: boolean = false;
  hasErrorOnDisciplinaForm: boolean = false;

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
  });

  constructor(
    private criarDisciplinaService: DisciplinasCriarService,
    private disciplinaGetAllService: DisciplinaGetAllService,
    private criarProfessorService: ProfessoresCriarService,
    private professoresGetAllService: ProfessoresGetAllService,
    private editarProfessorService: ProfessoresEditarService,
    private professoresGetByIdService: ProfessoresGetByIdService,
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
    });

    this.disciplinaForm = this.fb.group({
      sigla: [null, [Validators.maxLength(4), Validators.required]],
      cargaHoraria: [null, Validators.required],
      descricao: [null, Validators.maxLength],
      professor: [null, Validators.required]
    });

    this.professorForm = this.fb.group({
      nome: [null, [Validators.maxLength(40), Validators.required]],
      email: [null, [Validators.email, Validators.required]],
      cpf: [null, [Validators.required]]
    });
  }

  criarDisciplina(): void {
    if(this.disciplinaForm.valid) {
      this.criarDisciplinaService.criarDisciplina(this.disciplina)
        .pipe(switchMap(() => this.disciplinaGetAllService.getAllDisciplinas()))
        .subscribe(disciplinas => {
          disciplinas.map(disciplina => {
            this.disciplinasOptions = [...this.disciplinasOptions, { label: disciplina.descricao, value: disciplina.id }];
          })
        });
    } else {
      this.hasErrorOnDisciplinaForm = true;
    }
  }

  criarProfessor(): void {
    if(this.professorForm.valid) {
      this.criarProfessorService.criarProfessor(this.professor)
        .pipe(switchMap(() => this.professoresGetAllService.getAllProfessores()))
        .subscribe(professores => {
          professores.map(professor => {
            this.professoresOptions = [...this.professoresOptions, { label: professor.nome, value: professor.id }];
          })
        });
    } else {
      this.hasErrorOnProfessorForm = true;
    }
  }

  relacionarProfessorComDisciplina(id: number): void {
    this.professoresGetByIdService.professorGetById(id)
      .subscribe(professor => {
        if(!professor.disciplinasMinistradas) {
          professor.disciplinasMinistradas = [];
        }

        professor.disciplinasMinistradas = [...professor.disciplinasMinistradas ,{
          sigla: this.disciplina.sigla,
          descricao: this.disciplina.descricao,
          cargaHoraria: this.disciplina.cargaHoraria,
          id: this.disciplina.id
        }];        
        
        this.editarProfessorService.editarProfessor(professor)
          .subscribe(() => console.log('Relacionou e editou!'));

        this.disciplina.professor = professor;
      });
  }

  saveInfo(): void {
    NovaTurma.disciplinas = this.disciplinas;
  }

  next(): void {
    if(this.disciplinaForm.valid) {
      this.saveInfo();
      this.nextStep.emit();
    }
  }
}
