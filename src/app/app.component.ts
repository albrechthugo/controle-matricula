import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'controle-matricula';

  private _menuItems: Array<PoMenuItem> = [];
  get menuItems() {
    return this._menuItems;
  }

  private _iconHome = 'po-icon-home'
  private _iconWareHouse = 'po-icon-warehouse';

  constructor() { }

  ngOnInit(): void {
    this.setMenuItems();
  }

  private setMenuItems() {
    this._menuItems = [];

    this.estruturaMenu('/turmas',
      'Início',
      this._iconHome,
      null,
      'Início'
    );
    this.estruturaMenu('/turmas/abertura',
      'Abrir Turma',
      this._iconWareHouse,
      null,
      'Abrir Turma'
    );
  }

  public estruturaMenu(linkPagina, label, iconMenu, action?, shortLabel?) {
    this._menuItems.push({
      action: action ? action : null,
      icon: iconMenu,
      label,
      link: linkPagina,
      shortLabel: shortLabel ? shortLabel : label
    });
  }
}
