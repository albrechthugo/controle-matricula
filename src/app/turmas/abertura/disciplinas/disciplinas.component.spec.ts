import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinasComponent } from './disciplinas.component';

describe('DisciplinasComponent', () => {
  let component: DisciplinasComponent;
  let fixture: ComponentFixture<DisciplinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
