import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'resumir'
})

export class ResumirPipe implements PipeTransform{
    transform(valor: string,len? : any){
        if(!valor){
            return '';
        }
        console.log('len: '+len);
        let letters=len?len:40;
        console.log();
        return valor.substr(0,letters)+'...';
    }
}