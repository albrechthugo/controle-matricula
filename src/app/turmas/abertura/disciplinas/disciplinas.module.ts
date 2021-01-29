import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplinasComponent } from './disciplinas.component';
import { DisciplinaFormComponent } from './disciplina-form/disciplina-form.component';
import { PoModule } from '@po-ui/ng-components';
import { ValidationMessageModule } from 'src/app/shared/components/validation-message/validation-message.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DisciplinasComponent,
    DisciplinaFormComponent
  ],
  imports: [
    CommonModule,
    ValidationMessageModule,
    FormsModule,
    ReactiveFormsModule,
    PoModule
  ],
  exports: [
    DisciplinasComponent
  ]
})
export class DisciplinasModule { }
