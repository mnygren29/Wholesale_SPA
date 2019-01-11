import { BrokerUpdateComponent } from './brokers/broker-update/broker-update.component';
import { BrokerCardComponent } from './brokers/broker-card/broker-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ValuesComponent } from './values/values.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { ListsComponent } from './lists/lists.component';
import { BorrowerListComponent } from './brokers/borrower-list/borrower-list.component';
import { MessagesComponent } from './messages/messages.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { JwtModule } from '@auth0/angular-jwt';
import { BrokerDetailComponent } from './brokers/broker-detail/broker-detail.component';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { BrokerDetailResolver } from './_resolvers/broker-detail.resolver';
import { BrokerListResolver } from './_resolvers/broker-list.resolver';
import { BrokerEditResolver } from './_resolvers/broker-edit.resolver';
export function tokenGetter() {
  return localStorage.getItem('token');
}
import { NgxGalleryModule, NgxGalleryComponent } from 'ngx-gallery';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ValuesComponent, HomeComponent, RegisterComponent, ListsComponent, BorrowerListComponent, MessagesComponent,
    BrokerCardComponent,
    BrokerDetailComponent,
    BrokerUpdateComponent
  ],
  imports: [
    NgxGalleryModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
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
    PreventUnsavedChanges,
    UserService,
    BrokerDetailResolver,
    BrokerListResolver,
    BrokerEditResolver,
    ErrorInterceptorProvider

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
