import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  invalidRegistration = false;
  constructor(private service : AuthService, 
              private _router : Router) { }

  ngOnInit() {
  }

  submit(f){
  //   this.service.registerUser(f.value)
  //   .subscribe(response =>{
  //     console.log(f.value);
  //     console.log(response.status);;
  //     console.log("registered successfully!");
  //   },
  // error=>{
  //   alert("Error occured");
  // })


  this.service.registerUser(f.value)
  .subscribe(response =>{
    if(response){
      if(response.status == 200)
      {
        if(!JSON.parse(response['_body']).status)
        {
          this.invalidRegistration = true ;
          console.log(JSON.parse(response['_body']).mesage)  ;
          
        }
        else
        {
          this._router.navigate(['/dashboard']);
        }
      }
    }
    else{
      this.invalidRegistration = true;
    }
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
