import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submit(f){
    console.log(f);
  }

  userType =[{ 
              id : 1 , 
              name : "Admin"
            },
            { 
              id : 2 , 
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
