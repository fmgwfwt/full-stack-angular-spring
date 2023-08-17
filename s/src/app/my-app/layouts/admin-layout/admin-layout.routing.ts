import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { BoardAdminComponent} from "../../../login/board-admin/board-admin.component";
import {BoardUserComponent} from "../../../login/board-user/board-user.component";
import {RegisterComponent} from "../../../login/register/register.component";
import {LoginComponent} from "../../../login/login/login.component";
import {HomeComponent} from "../../../login/home/home.component";
import {BoardModeratorComponent} from "../../../login/board-moderator/board-moderator.component";
import {CompaniesComponent} from "../../companies/companies.component";
import {JobsComponent} from "../../jobs/jobs.component";
import {UserListComponent} from "../../user-list/user-list.component";
import {AboutUsComponent} from "../../about-us/about-us.component";

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'user', component: BoardUserComponent },
    { path: 'mod', component: BoardModeratorComponent },
    { path: 'admin', component: BoardAdminComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'companies', component: CompaniesComponent},
    { path: 'jobs', component: JobsComponent},
    { path: 'login', component: LoginComponent},
    { path: 'user-list', component: UserListComponent},
    { path: 'about-us', component: AboutUsComponent},
];
