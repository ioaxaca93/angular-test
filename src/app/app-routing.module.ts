import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectivasComponent } from './directivas/directivas.component';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { FirstC } from './firstc.component';
import { ParamsComponent } from './params/params.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

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
    path:'params/:param/:param2',
    component: ParamsComponent
  },
  {
    path:'form1',
    component: Form1Component
  },
  {
    path:'form2',
    component: Form2Component
  },
  {
    path:'father',
    loadChildren: './father/father.module#FatherModule'
  },
  {
    path:'**',
    redirectTo: 'first'
  }  
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
