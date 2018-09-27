import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService) { }
  public canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(next);
    if (this.authService.isAuthenticated()) {
      console.log('paso el guard');
      return true;
    } else {
      console.error('Bloqueado por el Guard');
      return false;
    }
  }
}
