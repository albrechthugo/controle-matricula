import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing.component';

const turmasRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
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
