/*   FileName: auth.guard.ts (Client)
     Student: Siddharth Pandya
     Student ID: 300915041
     Date: 03/04/2019 */

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  path:ActivatedRouteSnapshot[];
  route:ActivatedRouteSnapshot[];

  constructor(private authService: AuthService, private router: Router){
    
  }

  canActivate(): boolean {
    if(this.authService.loggedIn()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
