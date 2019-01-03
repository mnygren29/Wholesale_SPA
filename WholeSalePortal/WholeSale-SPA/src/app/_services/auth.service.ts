import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

/* //@injectable allows us to inject things into our service
//need to add this to our providers in the app module */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /* //baseUrl = 'http://localhost:64656/api/auth/'; */
   baseUrl = environment.apiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) { }

  login(model: any) {
   /*  //we are going to get a token back. we need to do something with this token when it comes back. so we need 
   to do something with an observable when it comes
    //back from the server rxjs operators. we need to pass them through a pipe method
    //allows us to chain rxhs operators to requests
    //we want to store token locally so we have easy access to it. use map */
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          console.log(this.decodedToken);
        }
      })
    );
  }

  register(model: any) {
  /*   //this will return an observable. so our register component needs to subscribe to this. */
    return this.http.post(this.baseUrl + 'register', model);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
