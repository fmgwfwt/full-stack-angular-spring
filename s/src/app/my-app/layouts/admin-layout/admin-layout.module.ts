import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {BoardModeratorComponent} from "../../../login/board-moderator/board-moderator.component";
import {LoginComponent} from "../../../login/login/login.component";
import {BoardAdminComponent} from "../../../login/board-admin/board-admin.component";
import {BoardUserComponent} from "../../../login/board-user/board-user.component";
import {RegisterComponent} from "../../../login/register/register.component";
import {HomeComponent} from "../../../login/home/home.component";
import {ProfileComponent} from "../../../login/profile/profile.component";
import {CompaniesComponent} from "../../companies/companies.component";
import {JobsComponent} from "../../jobs/jobs.component";
import {AboutUsComponent} from "../../about-us/about-us.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    BoardModeratorComponent,
    LoginComponent,
    BoardAdminComponent,
    BoardUserComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    CompaniesComponent,
    JobsComponent,
    AboutUsComponent,
  ]
})

export class AdminLayoutModule {}
