import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './my-app/components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './my-app/layouts/admin-layout/admin-layout.component';
import { LogoutComponent } from './my-app/logout/logout.component';
import { UserListComponent } from './my-app/user-list/user-list.component';
import { ConfirmationDialogComponent } from './my-app/companies/confirmation-dialog/confirmation-dialog.component';
import { AddJobsComponent } from './my-app/jobs/add-jobs/add-jobs.component';
import { UpdateJobsComponent } from './my-app/jobs/update-jobs/update-jobs.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';





@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    BrowserModule,
    MatInputModule,
    MatCheckboxModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LogoutComponent,
    UserListComponent,
    ConfirmationDialogComponent,
    AddJobsComponent,
    UpdateJobsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
