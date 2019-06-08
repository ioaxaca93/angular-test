import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  counter=0;

  @Input() edad;
  @Output() enviar=new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
  }

  ejecutar(){
    this.enviar.emit("Mnesaje desde app-child: "+(this.counter++));
  }

}
