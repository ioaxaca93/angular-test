import { NgModule} from '@angular/core';
import { Routes , RouterModule} from '@angular/router';
import { FatherComponent } from './father.component';
import { SonComponent } from './son/son.component';
import { AppModule } from '../app.module';

const routes: Routes=[{
    path: '',
    children: [
       {
            path: '',
            component: FatherComponent
       } ,
       {
           path: 'son',
           component: SonComponent
       }

    ]
}];
@NgModule({
    declarations:[FatherComponent, SonComponent],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FatherModule{}