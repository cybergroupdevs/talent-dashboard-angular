import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  nodeAPI : string = 'https://talent-dashboard-app.herokuapp.com';

  constructor(private http : Http, private _router : Router) { }

  registerUser(userDetail){
    return this.http.post(this.nodeAPI + "/register" , userDetail);
  }

  login(userCredentials){
    return this.http.post(this.nodeAPI + "/login", userCredentials ).map(response =>{
      if(response.json().status){
        console.log(response.json());
        localStorage.setItem('token',response.json().data.token);
        return true;
      }
      else{
        return false;
      }
    });
  }

  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/']);
    console.log("logged out successfully!")
  }

  isLoggedIn(){
    return tokenNotExpired();
    // let jwtHelper = new JwtHelper();
    // let token = localStorage.getItem('token');
    // if(!token){
    //   return false;
    // }
    // let expirationDate = jwtHelper.getTokenExpirationDate(token);
    // let isExpired = jwtHelper.isTokenExpired(token);

    // console.log("Expiration :", expirationDate);
    // console.log("Expired :", isExpired);
    // return !isExpired;
  }

  get currentUser(){
    let token = localStorage.getItem('token');
    if(!token) return null;
    return new JwtHelper().decodeToken(token);
  }
  
}
