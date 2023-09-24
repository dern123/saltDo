import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = "api/todo"  
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }
  
}
