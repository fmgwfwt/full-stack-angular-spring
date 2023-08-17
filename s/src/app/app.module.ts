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
import { AboutUsComponent } from './my-app/about-us/about-us.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LogoutComponent,
    UserListComponent,
    AboutUsComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
