import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  isValid=true;
  numero=20;
  personas=[
    {id: 1, nombre: "Israel", edad: 25},
    {id: 2, nombre: "José", edad: 38},
    {id: 3, nombre: "Mario", edad: 18},
    {id: 4, nombre: "Arturo", edad: 20}
  ];
  constructor() { }

  ngOnInit() {
  }

  change(){
    this.isValid=!this.isValid;
  }

  getColor(){
    if(this.numero<17){
      return 'red';
    }
    return 'green';
  }

}
