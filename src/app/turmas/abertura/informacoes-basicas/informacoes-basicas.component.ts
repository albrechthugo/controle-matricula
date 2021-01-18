import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { TesteService } from '../teste.service'

import { NovaTurma } from '../../../shared/mocks/turma-mock';

@Component({
  selector: 'app-informacoes-basicas',
  templateUrl: './informacoes-basicas.component.html',
  styleUrls: ['./informacoes-basicas.component.css']
})
export class InformacoesBasicasComponent implements OnInit {

  @Output()
  nextStep: EventEmitter<any> = new EventEmitter();

  hasError: boolean = false;
  algo: boolean = false;

  informacoesBasicasForm = new FormGroup({
    descricao: new FormControl(),
    anoLetivo: new FormControl(),
    periodoLetivo: new FormControl(),
    numeroVagas: new FormControl()
  })

  constructor(private fb: FormBuilder, private testeservice: TesteService) { }

  ngOnInit(): void {
    this.informacoesBasicasForm = this.fb.group({
      descricao: [null, [Validators.maxLength(30), Validators.required]],
      anoLetivo: [null, [Validators.required, Validators.pattern(/[0-9]{4}/)]],
      periodoLetivo: [null, [Validators.required, Validators.maxLength(1), Validators.pattern(/[1-2]{1}/)]],
      numeroVagas: [null]
    });

    if(this.algo) {
      return;
    }

    this.testeservice.testeee.subscribe(teste => {
      this.algo = true
      this.resetaForm()
    })
  }

  saveInfo(): void {
    if(this.informacoesBasicasForm.valid) {
      NovaTurma.descricao = this.informacoesBasicasForm.get('descricao').value;
      NovaTurma.anoLetivo = this.informacoesBasicasForm.get('anoLetivo').value;
      NovaTurma.periodoLetivo = this.informacoesBasicasForm.get('periodoLetivo').value;
      NovaTurma.numeroVagas = this.informacoesBasicasForm.get('numeroVagas').value;

      this.next();
    } else {
      this.hasError = true;
    }
  }

  next(): void {
    if(this.informacoesBasicasForm.valid) {
      this.nextStep.emit();
    }
  }

  resetaForm(): void {
    this.informacoesBasicasForm.reset();
  }

}
