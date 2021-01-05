import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PoMultiselectOption, PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'app-disciplinas',
  templateUrl: './disciplinas.component.html',
  styleUrls: ['./disciplinas.component.css']
})
export class DisciplinasComponent implements OnInit {
  
  options: PoMultiselectOption[] = [];
  professoresOptions: PoSelectOption[] = [];

  @Output()
  nextStep: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.nextStep.emit();
  }

}
