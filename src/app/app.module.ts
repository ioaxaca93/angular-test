import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstC } from './firstc.component';
import { ChildComponent } from './child/child.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { MyDirective } from './mi-directiva.directive';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { ResumirPipe } from './resumir.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ParamsComponent } from './params/params.component';
import { FatherModule } from './father/father.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstC,
    ChildComponent,
    DirectivasComponent,
    MyDirective,
    PipesExampleComponent,
    ParamsComponent,
    ResumirPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
