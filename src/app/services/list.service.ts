import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ListService {

  url : string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http : Http) { }

  getEmployeeList(){
    return this.http.get(this.url);
  }

}
