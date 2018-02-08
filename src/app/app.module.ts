import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule , 
    RouterModule.forRoot([ {
      path : 'home' , 
      component : HomeComponent
    }, 
    {
      path : 'userlist' , 
      component : UserListComponent
    } 
]), 
HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
