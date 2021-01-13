import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Turma } from '../../../entities/turma/turma.interface';
import { NovaTurma } from '../../../shared/mocks/turma-mock';

@Component({
  selector: 'app-informacoes-basicas',
  templateUrl: './informacoes-basicas.component.html',
  styleUrls: ['./informacoes-basicas.component.css']
})
export class InformacoesBasicasComponent implements OnInit {

  @Output()
  nextStep: EventEmitter<any> = new EventEmitter();
  erro = false;

  informacoesBasicas: Turma = {
    descricao: null,
    anoLetivo: null,
    periodoLetivo: null,
    numeroVagas: null
  }

  infoForm = new FormGroup({
    descricao: new FormControl(),
    anoLetivo: new FormControl(),
    periodoLetivo: new FormControl(),
    numeroVagas: new FormControl()
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.infoForm = this.fb.group({
      descricao: [null, [Validators.maxLength(30), Validators.required]],
      anoLetivo: [null, [Validators.required, Validators.pattern(/[0-9]{4}/)]],
      periodoLetivo: [null, [Validators.required, Validators.maxLength(1), Validators.pattern(/[1-2]{1}/)]],
      numeroVagas: [null]
    });
  }

  saveInfo(): any {
    if (this.infoForm.valid) {
      NovaTurma.descricao = this.informacoesBasicas.descricao;
      NovaTurma.anoLetivo = this.informacoesBasicas.anoLetivo;
      NovaTurma.periodoLetivo = this.informacoesBasicas.periodoLetivo;
      NovaTurma.numeroVagas = this.informacoesBasicas.numeroVagas;
      this.next();
    } else {
      return this.erro = true;
    }
  }

  next(): void {
    if (this.infoForm.valid) {
      this.nextStep.emit();
    }
  }

}
