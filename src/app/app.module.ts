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
import { ListService } from './services/list.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DetailsComponent,
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
    },
    {
      path : 'details' ,
      component : DetailsComponent
    }
]),
HttpModule
  ],
  providers: [
    ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
