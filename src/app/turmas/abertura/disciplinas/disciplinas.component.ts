import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PoMultiselectOption } from '@po-ui/ng-components';
import { Disciplina } from 'src/app/entities/disciplina/disciplina.interface';
import { NovaTurma } from 'src/app/shared/mocks/turma-mock';
import { DisciplinaGetAllService } from './services/disciplina-get-all.service';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {

  @Output()
  nextStep = new EventEmitter<any>();

  @Output()
  previousStep = new EventEmitter<any>();

  disciplinasOptions: PoMultiselectOption[] = [];
  disciplinas: Disciplina[] = [];

  constructor(private disciplinasGetAllService: DisciplinaGetAllService) {}

  ngOnInit(): void {
    this.disciplinasGetAllService.getAllDisciplinas()
      .subscribe(disciplinas => {
        this.disciplinas = disciplinas;
        this.disciplinas.map(disciplina => {
          this.disciplinasOptions = [...this.disciplinasOptions, { label: disciplina.descricao, value: disciplina.id }];
        });
      })
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

    if(NovaTurma.disciplinas.length) {
      this.nextStep.emit();
    }
  }
}
