import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { FirstC } from './firstc.component';

const routes: Routes = [
  {
    path:'directivas',
    component: DirectivasComponent
  },
  {
    path:'pipes',
    component: PipesExampleComponent
  },
  {
    path:'first',
    component: FirstC
  },
  {
    path:'**',
    redirectTo: 'first'
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
