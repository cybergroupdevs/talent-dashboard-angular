import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  employees : any[];
  constructor(private service : HttpService) { }

  ngOnInit() {
      this.service.getUserList()
      .subscribe(
        response => {
          this.employees = response.data;
          console.log(this.employees);
        },
        (error : Response) => {
          if(error.status === 400){}
          else{
            alert("Something unexpected occured");
            console.log(error);
          }
          
        });

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
