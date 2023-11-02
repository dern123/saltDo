import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL = "api/todo"  
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  
  get(): Observable<any>{
    return this.http.get<{ata:any, status:boolean}>(`${URL}/get`);
  }
  getById(id:string): Observable<any>{
    return this.http.get<{ata:any, status:boolean}>(`${URL}/get/${id}`);
  }
  postCreate(data:any): Observable<any>{
    return this.http.get<{ata:any, status:boolean}>(`${URL}/create`, {...data});
  }
  postEdit(data:any): Observable<any>{
    return this.http.get<{ata:any, status:boolean}>(`${URL}/edit`, {...data});
  }
}
