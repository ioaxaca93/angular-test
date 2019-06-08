import { Component } from '@angular/core';

@Component({
	selector: 'first',
	template: `<h2>Mi primer componente</h2>
	<h3>{{nombre+' '+getApellidos()}}</h3>
	<button [disabled] = "btnStatus" >Click aquí</button><br>
	<button [class.green-back] = "classBinding"  (click)="change($event)" >Click aquí</button>
	<br>
	<input type="text" (keyup.enter)="test($event)" />
	<input type="text" (keyup.enter)="test2(name.value)" #name />
	<br>
	<input type="text" [(ngModel)]="edad">
	<app-child [edad]="edad" (enviar)="getMensaje($event)"></app-child>
	`,
	styles: [`h2{ color: gray }`,`
			.green-back{
				background: green;
			}
		`
	]
})
export class FirstC{

	nombre = "Israel";
	apellidos="Oaxaca";
	edad="15";
	btnStatus= true;
	classBinding=true;
	getApellidos(){
		return this.apellidos;
	}

	change(e: any){
		console.log(e);
		this.btnStatus=!this.btnStatus;
	}

	test(e: any){
		console.log(e.target.value);
		this.nombre=e.target.value;
	}

	test2(nombre: string){
		console.log(nombre);
		this.apellidos=nombre;
	}

	getMensaje(e){ //mensaje desde otro componente
		alert(e);
	}
} 