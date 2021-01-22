import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PoMultiselectOption, PoSelectOption } from '@po-ui/ng-components';
import { switchMap } from 'rxjs/operators';

import { Aluno } from 'src/app/entities/aluno/aluno.interface';
import { FormaDeIngresso } from 'src/app/entities/aluno/forma-ingresso/ingresso.enum';
import { AlunosCriarService } from '../services/alunos-criar.service';
import { AlunosGetAllService } from '../services/alunos-get-all.service';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css']
})
export class AlunosFormComponent implements OnInit {

  @Output()
  listaAlunos = new EventEmitter<any>();

  hasError: boolean = false;

  alunosOptions: PoMultiselectOption[] = [];

  alunoForm = new FormGroup({
    cpf: new FormControl(),
    email: new FormControl(),
    nome: new FormControl(),
    formaIngresso: new FormControl(),
    matricula: new FormControl(),
  });

  formaIngressoOptions: PoSelectOption[] = [
    { label: 'ENADE', value: FormaDeIngresso.ENADE },
    { label: 'VESTIBULAR', value: FormaDeIngresso.VESTIBULAR }
  ];

  constructor(
    private criarAlunoService: AlunosCriarService,
    private alunosGetAllService: AlunosGetAllService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.alunoForm = this.fb.group({
      cpf: [null, [Validators.required, Validators.pattern(/[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}/)]],
      email: [null, [Validators.required, Validators.email]],
      nome: [null, [Validators.required]],
      formaIngresso: [null, [Validators.required]],
      matricula: [null, [Validators.required, Validators.pattern(/[0-9]{6}/)]],
    });
  }

   criarAluno() {
    if(this.alunoForm.valid) {
      const aluno: Aluno = {
        cpf: this.alunoForm.get('cpf').value,
        email: this.alunoForm.get('email').value,
        nome: this.alunoForm.get('nome').value,
        formaIngresso: this.alunoForm.get('formaIngresso').value,
        matricula: this.alunoForm.get('matricula').value,
      };

      this.criarAlunoService.criarAluno(aluno)
        .pipe(switchMap(() => this.alunosGetAllService.getAllAlunos()))
        .subscribe({
          next: alunos => {
            alunos.map(aluno => {
              this.alunosOptions = [...this.alunosOptions, { label: aluno.nome, value: aluno.id }];
            });

            this.listaAlunos.emit(this.alunosOptions);
            this.alunoForm.reset();
          },
          error: err => console.log(err)
        });
    } else {
      this.hasError = true;
    }
  }

}
