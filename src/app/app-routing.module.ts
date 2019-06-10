import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectivasComponent } from './directivas/directivas.component';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { FirstC } from './firstc.component';
import { ParamsComponent } from './params/params.component';

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
