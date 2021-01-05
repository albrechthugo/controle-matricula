import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AberturaComponent } from './abertura.component';

describe('AberturaComponent', () => {
  let component: AberturaComponent;
  let fixture: ComponentFixture<AberturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AberturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
