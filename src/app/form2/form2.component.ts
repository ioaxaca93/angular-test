import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  usuario={
    nombre: "Nombre",
    phone: "Telefono",
    msj: "Mensaje..."
  }
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log(this.usuario);
  }

}
