import { BrokerCardComponent } from './brokers/broker-card/broker-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ValuesComponent } from './values/values.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ListsComponent } from './lists/lists.component';
import { BorrowerListComponent } from './brokers/borrower-list/borrower-list.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('token');
}


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ValuesComponent, HomeComponent, RegisterComponent, ListsComponent, BorrowerListComponent, MessagesComponent,
    BrokerCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:64656'],
        blacklistedRoutes: ['localhost:64656/api/auth']
      }
    })
  ],
  providers: [
    AuthService,
    AlertifyService,
    AuthGuard,
    UserService,
    ErrorInterceptorProvider

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
