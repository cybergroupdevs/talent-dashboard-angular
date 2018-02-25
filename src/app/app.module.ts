import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { AuthGuard } from './services/auth-guard.service';
import { GraphComponent } from './graph/graph.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatDatepicker } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {MatSelectModule} from '@angular/material/select';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {EditEmployeeComponent} from './edit-employee/edit-employee.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpService } from './services/http.service';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';

// Fusion Charts
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { GraphComponent2 } from './graph2/graph.component';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    DetailsComponent,
    UserListComponent,
    EditEmployeeComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    GraphComponent,
    GraphComponent2,
    AdmindashboardComponent,
    AccessdeniedComponent 
  ],
  imports: [
    BrowserModule ,
    FusionChartsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatIconModule,
    MatSelectModule,
    MatChipsModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forRoot([ {
      path : '' , 
      component : LoginComponent
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
      path : 'dashboard' , 
      component : DashboardComponent,
      canActivate: [AuthGuard]
    },
    {
      path : 'admindashboard' , 
      component : AdmindashboardComponent,
      canActivate: [AuthGuard, AdminAuthGuard]
    },
    {
      path : 'userlist' , 
      component : UserListComponent,
      canActivate: [AuthGuard]
    },
    {
      path : 'details/:id' ,
      component : DetailsComponent,
      canActivate: [AuthGuard]
    },
    {
      path : 'editEmployee/:id' ,
      component : EditEmployeeComponent,
      canActivate: [AuthGuard]
    },
    {
      path : 'register' ,
      component : RegisterComponent
    },
    {
      path : 'no-access' ,
      component : AccessdeniedComponent
    },
    {
      path : '**' ,
      component : DetailsComponent,
      canActivate: [AuthGuard]
    }
]),
HttpModule
  ],
  providers: [
    HttpService,
    AuthService,
    AuthGuard,
    AdminAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
