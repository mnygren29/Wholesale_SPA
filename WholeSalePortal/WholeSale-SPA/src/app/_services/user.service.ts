import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

/* //need this to send up token with request for now */
//we can remove this becuase we added jwt in app module with whitelist/blacklist urls
//const httpOptions = {
//  headers: new HttpHeaders({
//    'Authorization': 'Bearer ' + localStorage.getItem('token')
//  })
//};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;
 
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    console.log('get users');
    console.log(this.baseUrl);
   // return this.http.get<User[]>(this.baseUrl + 'users/', httpOptions);
    return this.http.get<User[]>(this.baseUrl + 'users/');
  }

  getUser(id): Observable<User> {
   // return this.http.get<User>(this.baseUrl + 'users/' + id, httpOptions);
    return this.http.get<User>(this.baseUrl + 'users/' + id);
  }

  updateUser(id: number, user: User) {
    return this.http.put(this.baseUrl + 'users/' + id, user);
  }
}

