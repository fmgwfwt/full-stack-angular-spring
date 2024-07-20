import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './my-app/layouts/admin-layout/admin-layout.component';
import {LoginComponent} from "./login/login-register/login/login.component";
import { RegisterComponent } from './login/login-register/register/register.component';
import { UserDashboardComponent } from './my-app/dashboard/user-dashboard/user-dashboard.component';


const routes: Routes =[
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },{
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./my-app/layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },
  { path: 'signup', component: RegisterComponent }, 



  { path: 'user-dashboard', component: UserDashboardComponent }, 
 


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
