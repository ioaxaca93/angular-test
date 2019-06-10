import { Component } from '@angular/core';
import { PersonasService } from './ejemploservice.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';
  personas=[];
  constructor(private personaservice: PersonasService){
    this.personas=this.personaservice.getPersonas();
  }
}
