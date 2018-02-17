import { GraphComponent } from './graph/graph.component';
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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';


// Fusion Charts
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);


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
    DashboardComponent,
    GraphComponent,

  ],
  imports: [
    BrowserModule ,
    FusionChartsModule,
    FormsModule,
    ReactiveFormsModule,
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
      path : 'details/:username' ,
      component : DetailsComponent
    },
    {
      path : 'register' ,
      component : RegisterComponent
    },
    {
      path : '**' ,
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
