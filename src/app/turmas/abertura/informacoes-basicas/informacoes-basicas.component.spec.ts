import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesBasicasComponent } from './informacoes-basicas.component';

describe('InformacoesBasicasComponent', () => {
  let component: InformacoesBasicasComponent;
  let fixture: ComponentFixture<InformacoesBasicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacoesBasicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesBasicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
