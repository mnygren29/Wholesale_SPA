import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from 'util';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  //store user name and password from form
  model: any = {};
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  login() {
    //console.log(this.model);
    //because this is an observable, we need to subscribe to it
    this.authService.login(this.model).subscribe(next => {
      console.log('logged in succesfully');
    }, error => {
      //added error in place of failed login to use error interceptor
     // console.log('Failed Login');
      console.log(error);
    });
  }


  loggedIn() {

    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
  }
}
