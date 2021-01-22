import { HttpClientTestingModule } from '@angular/common/http/testing';
import { componentFactoryName } from '@angular/compiler';
import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PoModule } from '@po-ui/ng-components';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

xdescribe('O componente App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        PoModule,
        HttpClientTestingModule,
        AppRoutingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('deve criar o app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
