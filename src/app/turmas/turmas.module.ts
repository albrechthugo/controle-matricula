import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TurmasRoutingModule } from './turmas-routing.module';
import { TurmasComponent } from './turmas.component';

@NgModule({
  declarations: [
    TurmasComponent, 
  ],
  imports: [
    CommonModule,
    RouterModule,
    TurmasRoutingModule,
  ]
})
export class TurmasModule { }
