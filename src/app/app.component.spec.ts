import { TestBed, async } from '@angular/core/testing';
import { NgJsonSchema } from 'ng-jsonschema';
import { AppComponent } from './app.component';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { routes } from './app.module';
import { DemoComponent } from './demo/demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        TextMaskModule,
        NgJsonSchema.forRoot(),
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent,
        DemoComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    console.log('------>>> should create the app', app.title)
    expect(app.title).toEqual('app');
  }));

});
