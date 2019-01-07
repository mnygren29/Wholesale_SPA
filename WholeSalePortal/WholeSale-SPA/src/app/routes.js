"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var broker_update_component_1 = require("./brokers/broker-update/broker-update.component");
var home_component_1 = require("./home/home.component");
var borrower_list_component_1 = require("./brokers/borrower-list/borrower-list.component");
var messages_component_1 = require("./messages/messages.component");
var lists_component_1 = require("./lists/lists.component");
var auth_guard_1 = require("./_guards/auth.guard");
var broker_detail_component_1 = require("./brokers/broker-detail/broker-detail.component");
var broker_detail_resolver_1 = require("./_resolvers/broker-detail.resolver");
var broker_list_resolver_1 = require("./_resolvers/broker-list.resolver");
var broker_edit_resolver_1 = require("./_resolvers/broker-edit.resolver");
var prevent_unsaved_changes_guard_1 = require("./_guards/prevent-unsaved-changes.guard");
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
            // { path: 'members', component: BorrowerListComponent },
            { path: 'members', component: borrower_list_component_1.BorrowerListComponent, resolve: { users: broker_list_resolver_1.BrokerListResolver } },
            { path: 'members/:id', component: broker_detail_component_1.BrokerDetailComponent, resolve: { user: broker_detail_resolver_1.BrokerDetailResolver } },
            { path: 'member/edit', component: broker_update_component_1.BrokerUpdateComponent, resolve: { user: broker_edit_resolver_1.BrokerEditResolver }, canDeactivate: [prevent_unsaved_changes_guard_1.PreventUnsavedChanges] },
            { path: 'messages', component: messages_component_1.MessagesComponent },
            { path: 'lists', component: lists_component_1.ListsComponent },
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
//# sourceMappingURL=routes.js.map