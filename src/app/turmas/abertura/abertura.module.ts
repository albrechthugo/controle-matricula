import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PoModule } from '@po-ui/ng-components';
import { ValidationMessageModule } from 'src/app/shared/components/validation-message/validation-message.module';
import { AberturaRoutingModule } from './abertura-routing.module';
import { AberturaComponent } from './abertura.component';
import { AlunosFormComponent } from './alunos/alunos-form/alunos-form.component';
import { AlunosComponent } from './alunos/alunos.component';
import { DisciplinaFormComponent } from './disciplinas/disciplina-form/disciplina-form.component';
import { DisciplinasComponent } from './disciplinas/disciplinas.component';
import { InformacoesBasicasComponent } from './informacoes-basicas/informacoes-basicas.component';

@NgModule({
  declarations: [
    AberturaComponent,
    InformacoesBasicasComponent,
    DisciplinasComponent,
    AlunosComponent,
    AlunosFormComponent,
    DisciplinaFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AberturaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ValidationMessageModule,
    PoModule,
  ]
})
export class AberturaModule { }
