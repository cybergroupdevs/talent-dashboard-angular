import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ListService {

  constructor(private http : Http) { }

  getEmployeeList(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
