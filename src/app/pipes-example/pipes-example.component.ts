import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {
  texto='These Angular docs help you learn and use the Angular platform and framework, from your first app to optimizing complex enterprise apps. Tutorials and guides include downloadable example to accelerate your projects.'
  curso ={
    titulo: "Angular 7",
    estudiantes: 20124,
    rating: 4.632,
    precio: 135,
    fecha: new Date(2013,5,26)
  }
  constructor() { }

  ngOnInit() {
  }

}
