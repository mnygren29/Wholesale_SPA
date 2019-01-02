"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home/home.component");
var borrower_list_component_1 = require("./borrower-list/borrower-list.component");
var messages_component_1 = require("./messages/messages.component");
var lists_component_1 = require("./lists/lists.component");
var auth_guard_1 = require("./_guards/auth.guard");
//import { AuthGuard } from './_guards/auth.guard';
exports.appRoutes = [
    //      { path: 'home', component: HomeComponent },
    //      { path: 'members', component: BorrowerListComponent,canActivate:[AuthGuard] },
    //      { path: 'messages', component: MessagesComponent },
    //      { path: 'lists', component: ListsComponent },
    //      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    //];
    //dummy route way
    { path: 'home', component: home_component_1.HomeComponent },
    {
        //by leaving path empty below, it will match the other paths below. otherwise for example, if we put matt, you would have to put mattmembers
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            { path: 'members', component: borrower_list_component_1.BorrowerListComponent },
            { path: 'messages', component: messages_component_1.MessagesComponent },
            { path: 'lists', component: lists_component_1.ListsComponent },
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
//# sourceMappingURL=routes.js.map