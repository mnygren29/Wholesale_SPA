import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from 'util';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  //store user name and password from form
  model: any = {};
  constructor(public authService:AuthService,private alertify:AlertifyService) { }

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
  }
}
