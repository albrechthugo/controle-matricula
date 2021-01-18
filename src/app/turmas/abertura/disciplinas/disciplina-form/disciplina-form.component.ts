import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PoMultiselectOption, PoSelectOption } from '@po-ui/ng-components';
import { switchMap } from 'rxjs/operators';

import { Disciplina } from 'src/app/entities/disciplina/disciplina.interface';
import { Professor } from 'src/app/entities/professor/professor.interface';
import { Titulacao } from 'src/app/entities/professor/titulacao/titulacao.enum';
import { ProfessoresCriarService } from 'src/app/services/professores/professores-criar.service';
import { ProfessoresEditarService } from 'src/app/services/professores/professores-editar.service';
import { ProfessoresGetAllService } from 'src/app/services/professores/professores-get-all.service';
import { ProfessoresGetByIdService } from 'src/app/services/professores/professores-get-by-id.service';
import { DisciplinaGetAllService } from '../services/disciplina-get-all.service';
import { DisciplinasCriarService } from '../services/disciplinas-criar.service';

@Component({
  selector: 'app-disciplina-form',
  templateUrl: './disciplina-form.component.html',
  styleUrls: ['./disciplina-form.component.css']
})
export class DisciplinaFormComponent implements OnInit {

  @Output()
  listaDisciplinasOptions = new EventEmitter<any>();

  hasErrorOnProfessorForm: boolean = false;
  hasErrorOnDisciplinaForm: boolean = false;

  disciplinasOptions: PoMultiselectOption[] = [];
  disciplina: Disciplina = {
    cargaHoraria: null,
    descricao: null,
    sigla: null,
    professor: null
  };

  disciplinaForm = new FormGroup({
    sigla: new FormControl(),
    cargaHoraria: new FormControl(),
    descricao: new FormControl(),
    professor: new FormControl()
  });

  professores: Professor[] = [];
  professoresOptions: PoSelectOption[] = [];
  professor: Professor = {
    nome: null,
    email: null,
    cpf: null,
    titulacao: null,
    disciplinasMinistradas: null
  };

  professorForm = new FormGroup({
    nome: new FormControl(),
    email: new FormControl(),
    cpf: new FormControl(),
  });

  titulacaoProfessorOptions: PoSelectOption[] = [
    { label: 'Mestre', value: Titulacao.MESTRE },
    { label: 'Doutor', value: Titulacao.DOUTOR },
    { label: 'PHD', value: Titulacao.PHD }
  ];

  constructor(
    private criarDisciplinaService: DisciplinasCriarService,
    private disciplinaGetAllService: DisciplinaGetAllService,
    private criarProfessorService: ProfessoresCriarService,
    private professoresGetAllService: ProfessoresGetAllService,
    private editarProfessorService: ProfessoresEditarService,
    private professoresGetByIdService: ProfessoresGetByIdService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
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
      cpf: [null, [Validators.required, Validators.pattern(/[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}/)]],
      titulacao: [null]
    });
  }

  criarDisciplina(): void {
    if(this.disciplinaForm.valid) {
      this.criarDisciplinaService.criarDisciplina(this.disciplina)
        .pipe(switchMap(() => this.disciplinaGetAllService.getAllDisciplinas()))
        .subscribe({
          next: disciplinas => {
            disciplinas.map(disciplina => {
              this.disciplinasOptions = [...this.disciplinasOptions, { label: disciplina.descricao, value: disciplina.id }];
            });

            this.listaDisciplinasOptions.emit(this.disciplinasOptions);
            this.disciplinaForm.reset();
          },
          error: err => console.log(err)
        });

        this.editarProfessor();
    } else {
      this.hasErrorOnDisciplinaForm = true;
    }
  }

  criarProfessor(): void {
    if(this.professorForm.valid) {
      this.criarProfessorService.criarProfessor(this.professor)
        .pipe(switchMap(() => this.professoresGetAllService.getAllProfessores()))
        .subscribe({
          next: professores => {
            professores.map(professor => {
              this.professoresOptions = [...this.professoresOptions, { label: professor.nome, value: professor.id }];
            });

            this.professorForm.reset();
          },
          error: err => console.log(err)
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

        professor.disciplinasMinistradas = [...professor.disciplinasMinistradas , {
          sigla: this.disciplina.sigla,
          descricao: this.disciplina.descricao,
          cargaHoraria: this.disciplina.cargaHoraria,
          id: this.disciplina.id
        }];

        this.disciplina.professor = professor;
      });
  }

  editarProfessor(): void {
    this.editarProfessorService.editarProfessor(this.disciplina.professor)
      .subscribe(() => console.log('Relacionou e editou no banco'))
  }

}
