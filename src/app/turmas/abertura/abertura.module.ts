import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { 
PoButtonModule, 
PoContainerModule, 
PoFieldModule, 
PoModalModule, 
PoModule, 
PoStepperModule } from '@po-ui/ng-components';
import { AberturaRoutingModule } from './abertura-routing.module';

import { AberturaComponent } from './abertura.component';
import { InformacoesBasicasComponent } from './informacoes-basicas/informacoes-basicas.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { AlunosComponent } from './alunos/alunos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationMessageModule } from 'src/app/shared/components/validation-message/validation-message.module';

@NgModule({
  declarations: [
    AberturaComponent,
    InformacoesBasicasComponent,
    DisciplinasComponent,
    AlunosComponent,
  ],
  imports: [
    CommonModule,
    PoStepperModule,
    PoContainerModule,
    RouterModule,
    AberturaRoutingModule,
    PoButtonModule,
    PoFieldModule,
    PoModalModule,
    FormsModule,
    ReactiveFormsModule,
    ValidationMessageModule,
    PoModule
  ]
})
export class AberturaModule { }
