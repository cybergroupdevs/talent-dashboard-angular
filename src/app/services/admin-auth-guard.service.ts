import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router/src/router_state';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(){
    let user = this.authService.currentUser;
    if(user && user.userType == 'ADMIN'){
      return true;
    }
    else{
      this.router.navigate(['/no-access']);
      return false;
    }
  }

}
