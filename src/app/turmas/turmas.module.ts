import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TurmasRoutingModule } from './turmas-routing.module';

import { TurmasComponent } from './turmas.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    TurmasComponent, 
    LandingComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TurmasRoutingModule,
  ]
})
export class TurmasModule { }
