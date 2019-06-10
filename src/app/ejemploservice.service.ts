import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PersonasService{
    personas=[
        {id: 1, nombre: "Israel", edad: 25},
        {id: 2, nombre: "José", edad: 38},
        {id: 3, nombre: "Mario", edad: 18},
        {id: 4, nombre: "Arturo", edad: 20}
      ];

      getPersonas(){
          return this.personas;
      }
}