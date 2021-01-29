import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from "@angular/material/button";
import { BlogListComponent } from './blog-list/blog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogDetailsComponent,
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
