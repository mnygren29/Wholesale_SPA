import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BrokerDetailResolver implements Resolve<User> {
  constructor(private userService: UserService, private router: Router,
    private alertify: AlertifyService) { }

  //for this observable, since its is resolve, it automatically subscribes to the message.
  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    //but if an error, we need to get out of the function. So we will use pipe, which is an rxjs function.
    return this.userService.getUser(route.params['id']).pipe(
      catchError(error => {
        this.alertify.error('Problem retrieving data');
        this.router.navigate(['/members']);
        //of is a type of observable
        return of(null);
      })
    );
  }
}

