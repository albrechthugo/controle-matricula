import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { ValidationMessageModule } from 'src/app/shared/components/validation-message/validation-message.module';
import { PoModule } from '@po-ui/ng-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AlunosComponent,
    AlunosFormComponent
  ],
  imports: [
    CommonModule,
    ValidationMessageModule,
    FormsModule,
    ReactiveFormsModule,
    PoModule
  ],
  exports: [
    AlunosComponent
  ]
})
export class AlunosModule { }
