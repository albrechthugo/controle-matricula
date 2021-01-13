import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  navItems: PoMenuItem[] = [
    {
      label: 'Início',
      link: 'turmas',
      icon: 'po-icon po-icon-home'
    },
    {
      label: 'Abrir Turma',
      link: 'turmas/abertura',
      icon: 'po-icon po-icon-warehouse'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
