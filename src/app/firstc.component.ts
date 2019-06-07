import { Component } from '@angular/core';

@Component({
	selector: 'first',
	template: `<h2>Mi primer componente</h2>
		<h3>{{nombre+' '+getApellidos()}}</h3>
		<button [disabled] = "btnStatus" >Click aquí</button><br>
	    <button [class.green-back] = "classBinding" (click)="change($event)" >Click aquí</button>
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
	btnStatus= true;
	classBinding=true;
	getApellidos(){
		return "Oaxaca Figueroa";
	}

	change(e){
		console.log(e);
		this.btnStatus=!this.btnStatus;
	}
} 