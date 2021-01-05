import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PoMultiselectOption, PoSelectOption } from '@po-ui/ng-components';
import { Disciplina } from 'src/app/entities/disciplina/disciplina.interface';

import { DisciplinaGetAllService } from './services/disciplina-get-all.service';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {
  
  options: PoMultiselectOption[] = [];
  professoresOptions: PoSelectOption[] = [];
  disciplinas: Disciplina[] = [];

  @Output()
  nextStep: EventEmitter<any> = new EventEmitter();

  constructor(private disciplinasGetAllService: DisciplinaGetAllService) { }

  ngOnInit(): void {
    this.disciplinasGetAllService.getAllDisciplinas().subscribe(disciplinas => {
      this.disciplinas = disciplinas;
      this.disciplinas.map(disciplina => {
        this.options = [...this.options, { label: disciplina.descricao, value: disciplina.id }]
      })
    })
  }

  next() {
    this.nextStep.emit();
  }
}
