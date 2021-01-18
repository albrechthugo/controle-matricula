import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PoMultiselectOption } from '@po-ui/ng-components';
import { ActivatedRoute } from '@angular/router';


import { Disciplina } from 'src/app/entities/disciplina/disciplina.interface';
import { NovaTurma } from 'src/app/shared/mocks/turma-mock';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {

  @Output()
  nextStep: EventEmitter<any> = new EventEmitter();

  @Output()
  previousStep: EventEmitter<any> = new EventEmitter();

  disciplinasOptions: PoMultiselectOption[] = [];
  disciplinas: Disciplina[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.disciplinas = this.activatedRoute.snapshot.data['disciplinas'];
    this.disciplinas.map(disciplina => {
      this.disciplinasOptions = [...this.disciplinasOptions, { label: disciplina.descricao, value: disciplina.id }];
    });
  }

  updateDisciplinasOptions(disciplinas): void {
    this.disciplinasOptions = disciplinas;
  }

  saveInfo(): void {
    NovaTurma.disciplinas = this.disciplinas;
  }

  previous(): void {
    this.previousStep.emit();
  }

  next(): void {
      this.saveInfo();
      this.nextStep.emit();
  }
}
