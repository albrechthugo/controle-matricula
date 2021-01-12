import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Turma } from '../../../entities/turma/turma.interface';
import { novaTurma } from '../../../shared/mocks/turma-mock';

@Component({
  selector: 'app-informacoes-basicas',
  templateUrl: './informacoes-basicas.component.html',
  styleUrls: ['./informacoes-basicas.component.css']
})
export class InformacoesBasicasComponent implements OnInit {

  @Output()
  nextStep: EventEmitter<any> = new EventEmitter();

  informacoesBasicas: Turma = {
    descricao: null,
    anoLetivo: null,
    periodoLetivo: null,
    numeroVagas: null
  }

  form = new FormGroup({
    descricao: new FormControl(),
    anoLetivo: new FormControl(),
    periodoLetivo: new FormControl(),
    numeroVagas: new FormControl()
  })

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
   this.form = this.fb.group({
      descricao: [null, [Validators.maxLength(30), Validators.required]],
      anoLetivo: [null, [Validators.required, Validators.pattern(/[0-9]{4}/)]],
      periodoLetivo: [null, [Validators.required, Validators.maxLength(1),Validators.pattern(/[1-2]{1}/)]],
      numeroVagas: [null, [Validators.required]]
    });
  }

  saveInfo(): void {
    novaTurma.descricao = this.informacoesBasicas.descricao;
    novaTurma.anoLetivo = this.informacoesBasicas.anoLetivo;
    novaTurma.periodoLetivo = this.informacoesBasicas.periodoLetivo;
    novaTurma.numeroVagas = this.informacoesBasicas.numeroVagas;
  }

  next(): void {
    this.saveInfo();
    this.nextStep.emit();
  }

}
