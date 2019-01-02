import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BorrowerListComponent } from './borrower-list/borrower-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
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
      { path: 'members', component: BorrowerListComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListsComponent },
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

