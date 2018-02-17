import { Component, OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  employees : any[];
  constructor(private service : ListService) { }

  ngOnInit() {
      this.service.getEmployeeList().subscribe(response => {
      this.employees = response.json();
      console.log(this.employees);
      },error => {
        alert("Something unexpected occured");
        console.log(error);
      })

      // this.service.getCategoryList().subscribe(response =>{
      //   this.categoryList = response.json();
      //   console.log(this.categoryList)
      // })
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
