 import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit , OnDestroy {
  employees : any[];
  filteredEmployee : any[];
  subscription : Subscription ; 
  skillList : {};


  constructor(private service : HttpService,
              private router : Router ) { }


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

    this.service.getSkills()
    .subscribe(response =>{
      if(response){
        console.log("skills fetched successfully!");
        this.skillList = response.data;
      }
      else{
        console.log("Error in fetching skills")
      }
    });
  }
  
  filter(query : string ){
    this.filteredEmployee = (query) ? 
    this.employees.filter(emp => emp.displayName.toLowerCase().includes(query.toLowerCase())) : 
    this.employees ; 
  }

 public goToUserDetails(id)
  {
      this.router.navigate(['/details', id])
  }
  public filterByGender(event){
    this.filteredEmployee = (event.value[0]) ? 
    this.employees.filter(emp => emp.gender.toLowerCase().includes(event.value[0].toLowerCase())) : 
    this.employees ; 
  }

  public filterBySkills(event){
    this.filteredEmployee = (event.value) ? 
    this.employees.filter(emp => emp.skills.includes(event.value.toLowerCase()) || emp.skills.includes(event.value.toUpperCase())) : 
    this.employees ; 
  }

  

  genderList = [ {
    id:1 , name:"Male"
  },
  {
    id:2 , name:"Female"
  }];
}
