import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PoMenuModule } from '@po-ui/ng-components';

import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PoMenuModule
  ],
  exports: [
    MenuComponent
  ]
})
export class CoreModule { }
