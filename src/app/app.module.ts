import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule , 
    RouterModule.forRoot([ {path : 'home' , component : HomeComponent} 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
