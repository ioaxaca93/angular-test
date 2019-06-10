import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class getService{
    constructor(private http: HttpClient){}

    getUsers(){
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    }

    getComments(): Observable<Comment[]>{
        return this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
    }
}