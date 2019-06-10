import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[myDirective]'
})

export class MyDirective{
    
    @Input('myDirective') newColor: string;
    constructor(private el: ElementRef){
    }

    @HostListener('mouseenter')
    onMouseEnter(){
        console.log('mouse sobre elemento, newColor: '+(this.newColor==null || this.newColor === undefined ));
        this.changeColor(this.newColor.length===0 ?'yellow':this.newColor);
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        console.log('mouse dejando elemento');
        this.changeColor('white');
    }

    changeColor(color: string){
        console.log('color: '+color);
        this.el.nativeElement.style.backgroundColor=color;
    }
}