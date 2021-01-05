import { Component, OnInit } from '@angular/core';
import { PoMultiselectOption } from '@po-ui/ng-components';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  options: PoMultiselectOption[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
