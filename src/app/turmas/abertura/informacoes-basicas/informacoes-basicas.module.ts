import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformacoesBasicasComponent } from './informacoes-basicas.component';
import { PoModule } from '@po-ui/ng-components';
import { ValidationMessageModule } from 'src/app/shared/components/validation-message/validation-message.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InformacoesBasicasComponent
  ],
  imports: [
    CommonModule,
    ValidationMessageModule,
    FormsModule,
    ReactiveFormsModule,
    PoModule
  ],
  exports: [
    InformacoesBasicasComponent
  ]
})
export class InformacoesBasicasModule { }
