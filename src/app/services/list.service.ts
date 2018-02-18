import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ListService {

  url : string = 'https://jsonplaceholder.typicode.com/users';
  url2 : string = 'https://talent-dashboard-app.herokuapp.com';

  constructor(private http : Http) { }

  getEmployeeList(){
    return this.http.get(this.url);
  }

  registerUser(userDetail){
    return this.http.post(this.url2 + "/register" , userDetail);
  }
}
