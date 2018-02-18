import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  url : string = 'https://jsonplaceholder.typicode.com/users';
  nodeAPI : string = 'https://talent-dashboard-app.herokuapp.com';

  constructor(private http : Http) { }

  getEmployeeList(){
    return this.http.get(this.url);
  }
  
}
