import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { BoardAdminComponent} from "../../../login/board/board-admin/board-admin.component";
import {BoardUserComponent} from "../../../login/board/board-user/board-user.component";
import {RegisterComponent} from "../../../login/login-register/register/register.component";
import {LoginComponent} from "../../../login/login-register/login/login.component";
import {HomeComponent} from "../../../login/board/home/home.component";
import {BoardModeratorComponent} from "../../../login/board/board-moderator/board-moderator.component";
import {CompaniesComponent} from "../../companies/companies.component";
import {JobsComponent} from "../../jobs/jobs.component";
import {UserListComponent} from "../../user-list/user-list.component";
import {AboutUsComponent} from "../../about-us/about-us.component";
import {UpdateCompanyComponent} from "../../companies/update-company/update-company.component";
import {AddCompanyComponent} from "../../companies/add-company/add-company.component";
import { UpdateJobsComponent } from 'app/my-app/jobs/update-jobs/update-jobs.component';
import { AddJobsComponent } from 'app/my-app/jobs/add-jobs/add-jobs.component';
import { UpdateUserListComponent } from 'app/my-app/user-list/update-user-list/update-user-list.component';

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
    //   component: AddCompanyComponent
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
    { path: 'update-company/:id', component: UpdateCompanyComponent },
    { path: 'update-jobs/:id', component: UpdateJobsComponent }, 
    { path: 'add-company', component: AddCompanyComponent},
    { path: 'add-jobs', component: AddJobsComponent },
    { path: 'user-list', component: UserListComponent }, 
    { path: 'update-user-list/:id', component: UpdateUserListComponent },
     
    
];
