import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  url : string = 'https://jsonplaceholder.typicode.com/users';
  nodeAPI : string = 'https://talent-dashboard-app.herokuapp.com';

  constructor(private http : Http) { }

  getEmployeeList(){
    return this.http.get(this.url);
  }

  getUserList(){
    let headers = new Headers();
    let token = localStorage.getItem('token');
    headers.append('token',token);

    let options = new RequestOptions({
      headers: headers
    });
    return this.http.get(this.nodeAPI + '/employeeList?pageNo=1&limit=50', options)
      .map(response => response.json());
  }

  getSkills(){
    let headers = new Headers();
    let token = localStorage.getItem('token');
    headers.append('token',token);

    let options = new RequestOptions({
      headers: headers
    });
    return this.http.get(this.nodeAPI + '/listskill', options)
      .map(response => response.json());
  }
  
}
