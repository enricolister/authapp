import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //console.log(next);

    if (this.auth.isAuthenticated()) {
      console.log("Access granted");
      return true;
    } else {
      console.log("Access denied");
      return false;
    }
  }
}
