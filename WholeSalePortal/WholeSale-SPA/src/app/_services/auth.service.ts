import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
//@injectable allows us to inject things into our service
//need to add this to our providers in the app module
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:64656/api/auth/';

  constructor(private http: HttpClient) { }

  login(model: any) {
    //we are going to get a token back. we need to do something with this token when it comes back. so we need to do something with an observable when it comes
    //back from the server rxjs operators. we need to pass them through a pipe method
    //allows us to chain rxhs operators to requests
    //we want to store token locally so we have easy access to it. use map
    return this.http.post(this.baseUrl + 'login', model)
      .pipe(map((response: any) => {
        //user will be token that comes back
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
        }
      })
      );
  }
}