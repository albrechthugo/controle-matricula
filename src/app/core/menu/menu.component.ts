import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: PoMenuItem[] = [];
  logoUrl: string;

  constructor() { }

  ngOnInit(): void {
    this.logoUrl = '../../../assets/images/logo.png'
    this.menuItems = [
      {label: 'Abertura de Turmas', link: '/turmas'}
    ]
  }

}
