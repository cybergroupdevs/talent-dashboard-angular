import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service : AuthService) { }

  ngOnInit() {
  }

  submit(f){
    this.service.registerUser(f.value)
    .subscribe(response =>{
      console.log(f.value);
      console.log(response.status);;
      console.log("registered successfully!");
    },
  error=>{
    alert("Error occured");
  })
  }

  genderType = [ {
    id:"F" , name:"Female"
  },
  {
    id:"F" , name:"Male"
  }];

  userType =[{ 
              id : "ADMIN" , 
              name : "Admin"
            },
            { 
              id : "USER" , 
              name : "User"
            }];

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
