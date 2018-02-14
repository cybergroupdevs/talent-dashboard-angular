import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  employees : any[];
  constructor(private http : Http) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users')
          .subscribe(response => {
            this.employees = response.json();
            console.log(this.employees);
          })

  }

  categoryList = [ {
    id:1 , name:"skill1"
  },
  {
    id:2 , name:"skill2"
  },
  {
    id:3 , name:"skill3"
  }];
}
