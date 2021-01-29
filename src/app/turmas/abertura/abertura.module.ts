import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoModule } from '@po-ui/ng-components';
import { AberturaRoutingModule } from './abertura-routing.module';
import { AberturaComponent } from './abertura.component';
import { AlunosModule } from './alunos/alunos.module';
import { DisciplinasModule } from './disciplinas/disciplinas.module';
import { InformacoesBasicasModule } from './informacoes-basicas/informacoes-basicas.module';

@NgModule({
  declarations: [
    AberturaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AberturaRoutingModule,
    PoModule,
    InformacoesBasicasModule,
    DisciplinasModule,
    AlunosModule
  ]
})
export class AberturaModule { }
