import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import {ConfirmPasswordValidators} from '../common/confirmPassword.validator'
import { EmpCodeValidator } from '../common/empCode.validator';
import {HttpService} from '../services/http.service'
import { UserDetails } from "../model/UserDetails.interface";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLinear: boolean = true;
  invalidRegistration : boolean ;

  firstFormGroup : FormGroup ; 
  secondFormGroup : FormGroup ; 

  constructor(private _router : Router , 
               private _formBuilder : FormBuilder, 
              private service : HttpService) { }

  ngOnInit(){ 

    this.firstFormGroup = this._formBuilder.group({
      firstName : ['',[Validators.required]
                  ] , 
      lastName  : ['' , [Validators.required]
                  ],
      employeeCode: ['',[Validators.required],
                        [EmpCodeValidator.shouldBeUnique]
                    ],
      emailAddress :  ['',[Validators.required ,
                          Validators.email]
                      ]
    });
    this.secondFormGroup = this._formBuilder.group({
      password:['' , [  Validators.required , 
                          Validators.minLength(7) , 
                          Validators.maxLength(15)] ],
      confirmPassword:['' ,[Validators.required
                          ]]
    },{
      validator : ConfirmPasswordValidators.sameAsPassword 
    });
  }
  
    // Comment 1 :  properties to access form control for validation messages in html page

    get firstName(){
      return this.firstFormGroup.get('firstName');
    }
    get lastName(){
      return this.firstFormGroup.get('lastName');
    }    
    get employeeCode(){
      return this.firstFormGroup.get('employeeCode');
    } 
    get emailAddress(){
      return this.firstFormGroup.get('emailAddress');
    }    
    get password(){
      return this.secondFormGroup.get('password');
    }
    get confirmPassword(){
      return this.secondFormGroup.get('confirmPassword');
    }


    submit(){
      debugger
      let user : UserDetails   = {
        firstName : this.firstFormGroup.controls.firstName.value as string  , 
        lastName : this.firstFormGroup.controls.lastName.value as string, 
        employeeCode : this.firstFormGroup.controls.employeeCode.value as string,
        emailAddress : this.firstFormGroup.controls.emailAddress.value as string,
        password : this.secondFormGroup.controls.password.value as string
      }
      
      this.service.registerUser(user)
          .subscribe(response =>{
            if(response){
              if(response.status == 200)
                {
                  debugger
                  if(!JSON.parse(response['_body']).status)
                  {
                    this.invalidRegistration = true ;
                    console.log(JSON.parse(response['_body']).mesage)  ;    
                  }
                  else
                    this._router.navigate(['/dashboard']);
                  
                }
              }
              else
                this.invalidRegistration = true;
          },
            error=>{
              alert("Error occured");
         })
    }
}
