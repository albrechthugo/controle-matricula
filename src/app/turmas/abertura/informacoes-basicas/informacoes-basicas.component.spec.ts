import { CommonModule } from '@angular/common';
import { compileNgModule } from '@angular/compiler';
import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PoModule } from '@po-ui/ng-components';
import { of } from 'rxjs';
import { Turma } from 'src/app/entities/turma/turma.interface';
import { TurmaCriarService } from 'src/app/services/turma/turma-criar.service';
import { ValidationMessageModule } from 'src/app/shared/components/validation-message/validation-message.module';
import { NovaTurma } from 'src/app/shared/mocks/turma-mock';

import { InformacoesBasicasComponent } from './informacoes-basicas.component';

class TurmaCriarServiceMock {
  canResetForm = new EventEmitter<Turma>();

  abrirTurma(turma: Turma) {
    this.canResetForm.emit(turma);
    return of([])
  }
}

describe('O componente InformacoesBasicas', () => {
  let component: InformacoesBasicasComponent;
  let fixture: ComponentFixture<InformacoesBasicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformacoesBasicasComponent],
      imports: [
        ReactiveFormsModule,
        CommonModule,
        PoModule,
        ValidationMessageModule
      ],
      providers: [{
        provide: TurmaCriarService,
        useClass: TurmaCriarServiceMock
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesBasicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser instanciado', () => {
    expect(component).toBeTruthy();
  });

  fit('deve salvar infos e emitir um evento para o stepper avancar o passo', () => {
    spyOn(component, 'next');

    fixture.detectChanges();
    component.informacoesBasicasForm.get('descricao').setValue('Calouros');
    component.informacoesBasicasForm.get('anoLetivo').setValue(2021);
    component.informacoesBasicasForm.get('periodoLetivo').setValue(2);
    component.informacoesBasicasForm.get('numeroVagas').setValue(22);
    component.saveInfo();

    expect(component.next).toHaveBeenCalled();
  });

  it('deve setar hasError como true se o formulario estiver invalido', () => {
    fixture.detectChanges();
    component.saveInfo();
    expect(component.hasError).toBeTruthy();
  });

  it('deve resetar o formulario caso contenha turma', () => {
    component.informacoesBasicasForm.get('descricao').setValue('Calouros');
    component.informacoesBasicasForm.get('anoLetivo').setValue(2021);
    component.informacoesBasicasForm.get('periodoLetivo').setValue(2);
    component.informacoesBasicasForm.get('numeroVagas').setValue(22);

    component.resetaForm();

    expect(component.informacoesBasicasForm.get('descricao').value).toBeNull();
    expect(component.informacoesBasicasForm.get('anoLetivo').value).toBeNull();
    expect(component.informacoesBasicasForm.get('periodoLetivo').value).toBeNull();
    expect(component.informacoesBasicasForm.get('numeroVagas').value).toBeNull();
  });

});
