import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const turmasRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'abertura'
  },
  {
    path: 'abertura',
    loadChildren: () => import('./abertura/abertura.module').then(m => m.AberturaModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(turmasRoutes)],
  exports: [RouterModule]
})
export class TurmasRoutingModule { }
