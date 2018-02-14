import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { D3Service, D3_DIRECTIVES  } from './d3';
import { GraphComponent } from './visuals/graph/graph.component';
import { SHARED_VISUALS } from './visuals/shared';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GraphComponent,
    ...SHARED_VISUALS,
    ...D3_DIRECTIVES,
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
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
