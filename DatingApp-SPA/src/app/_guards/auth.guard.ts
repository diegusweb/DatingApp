import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertity: AlertifyService ){}


  canActivate(): boolean  {
    if (this.authService.loggedIN()) {
      return true;
    }
    
    this.alertity.error('You shall not pass!!!');
    this.router.navigate(['?home']);

    return false;
  }
}
