import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-informacoes-basicas',
  templateUrl: './informacoes-basicas.component.html',
  styleUrls: ['./informacoes-basicas.component.css']
})
export class InformacoesBasicasComponent implements OnInit {

  @Output()
  nextStep: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    this.nextStep.emit();
  }

}
