import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstC } from './firstc.component';
import { ChildComponent } from './child/child.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { MyDirective } from './mi-directiva.directive';


@NgModule({
  declarations: [
    AppComponent,
    FirstC,
    ChildComponent,
    DirectivasComponent,
    MyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
