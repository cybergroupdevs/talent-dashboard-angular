import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { UserListComponent } from './user-list/user-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DetailsComponent,
    UserListComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule , 
    RouterModule.forRoot([ {
      path : '' , 
      component : DashboardComponent
    }, 
    {
      path : 'login' , 
      component : LoginComponent
    },
    {
      path : 'register' , 
      component : RegisterComponent
    },
    {
      path : 'userlist' , 
      component : UserListComponent
    },
    {
      path : 'details' ,
      component : DetailsComponent
    }
]),
HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
