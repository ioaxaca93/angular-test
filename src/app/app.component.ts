import { Component, OnInit } from '@angular/core';
import { PersonasService } from './ejemploservice.service';
import { getService } from './getService.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-test';
  personas=[];
  constructor(private personaservice: PersonasService, private getService: getService){
    this.personas=this.personaservice.getPersonas();
  }
  ngOnInit(){
      this.getService.getUsers().subscribe(data=>{
        console.log(data);
      });
      //usando un modelo
      let coments: Array<Comment>;
      this.getService.getComments().subscribe(data=>{
        coments=data;
        console.log(coments)
      });
  }
}
