import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit , OnDestroy {
  employees : any[];
  filteredEmployee : any[];
  subscription : Subscription ; 


  constructor(private service : HttpService) { }


  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  ngOnInit() {
      this.subscription = this.service.getUserList()
      .subscribe(
        response => {
          this.filteredEmployee = this.employees = response.data;
          console.log(this.employees);
        },
        (error : Response) => {
          if(error.status === 400){}
          else{
            alert("Something unexpected occured");
            console.log(error);
          }
          
        });

  }
  
  filter(query : string ){
    this.filteredEmployee = (query) ? 
    this.employees.filter(emp => emp.displayName.toLowerCase().includes(query.toLowerCase())) : 
    this.employees ; 
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
