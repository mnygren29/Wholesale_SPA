import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from 'util';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  //store user name and password from form
  model: any = {};
  //injecting router service. this is used to manipulate redirects. for example, if we press logout, we want to redirect the user back to the homepage
  constructor(public authService:AuthService,private alertify:AlertifyService,private router:Router) { }

  ngOnInit() {
  }

  login() {
    //console.log(this.model);
    //because this is an observable, we need to subscribe to it
    this.authService.login(this.model).subscribe(next => {

      this.alertify.success('logged in succesfully');
    }, error => {
      //added error in place of failed login to use error interceptor
     // console.log('Failed Login');
      //console.log(error);
      this.alertify.error(error);
      //we are going to add an anoynmous function here for the router service.
      }, () => {
        this.router.navigate(['/members']);
      });
  }


  loggedIn() {

   // const token = localStorage.getItem('token');
    //return !!token;
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }
}
