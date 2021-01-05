import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AberturaComponent } from './abertura.component';

const aberturaRoutes: Routes = [
  {
    path: '',
    component: AberturaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(aberturaRoutes)],
  exports: [RouterModule]
})
export class AberturaRoutingModule { }
