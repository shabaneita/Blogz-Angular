import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from "@angular/material/button";
import { BlogListComponent } from './blog-list/blog-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailsListComponent } from './user-details-list/user-details-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSidenavModule } from "@angular/material/sidenav";
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    BlogDetailsComponent,
    BlogListComponent,
    UserDetailsComponent,
    UserDetailsListComponent,
    UserProfileComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    BlogAddComponent,
    BlogEditComponent,
    UserEditComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
