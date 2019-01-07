import { BrokerUpdateComponent } from './brokers/broker-update/broker-update.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BorrowerListComponent } from './brokers/borrower-list/borrower-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { BrokerDetailComponent } from './brokers/broker-detail/broker-detail.component';
import { BrokerDetailResolver } from './_resolvers/broker-detail.resolver';
import { BrokerListResolver } from './_resolvers/broker-list.resolver';
import { BrokerEditResolver } from './_resolvers/broker-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
//import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
//      { path: 'home', component: HomeComponent },
//      { path: 'members', component: BorrowerListComponent,canActivate:[AuthGuard] },
//      { path: 'messages', component: MessagesComponent },
//      { path: 'lists', component: ListsComponent },
//      { path: '**', redirectTo: 'home', pathMatch: 'full' },
//];
  //dummy route way
  { path: 'home', component: HomeComponent },
  {
    //by leaving path empty below, it will match the other paths below. otherwise for example, if we put matt, you would have to put mattmembers
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
     // { path: 'members', component: BorrowerListComponent },
      { path: 'members', component: BorrowerListComponent, resolve: { users: BrokerListResolver }  },
      { path: 'members/:id', component: BrokerDetailComponent, resolve: { user: BrokerDetailResolver } },
      { path: 'member/edit', component: BrokerUpdateComponent, resolve: { user: BrokerEditResolver } ,canDeactivate:[PreventUnsavedChanges]},
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListsComponent },
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

