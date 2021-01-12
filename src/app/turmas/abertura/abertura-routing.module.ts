import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessoresGetAllResolver } from 'src/app/resolvers/professores/professores-get-all.resolver';

import { AberturaComponent } from './abertura.component';
import { AlunosGetAllResolver } from './alunos/resolvers/alunos-get-all.resolver';
import { DisciplinasGetAllResolver } from './disciplinas/resolvers/disciplinas-get-all.resolver';

const aberturaRoutes: Routes = [
  {
    path: '',
    component: AberturaComponent,
    resolve: {
      professores: ProfessoresGetAllResolver,
      alunos: AlunosGetAllResolver,
      disciplinas: DisciplinasGetAllResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(aberturaRoutes)],
  exports: [RouterModule]
})
export class AberturaRoutingModule { }
