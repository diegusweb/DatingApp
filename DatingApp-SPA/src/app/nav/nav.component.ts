import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authServices: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.authServices.login(this.model).subscribe(next => {
      this.alertify.success('logged in Successfully');

    }, error => {
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/members']);
    });
  }

  loggedIn(){
    return this.authServices.loggedIN();
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.authServices.decodedToken = null;
    this.authServices.currentUSer = null;
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }

}
