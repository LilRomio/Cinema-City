import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './sharepage/pages/home/home.component';
import { CinemasComponent } from './sharepage/pages/cinemas/cinemas.component';
import { BookingComponent } from './sharepage/pages/booking/booking.component';
import { LoginComponent } from './sharepage/login/login.component';
import { SignupComponent } from './sharepage/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup';
import { ProfileComponent } from './profilepage/profile/profile.component';
import { AdminComponent } from './profilepage/admin/admin.component';
import { AdminRoutingModule } from './profilepage/admin/admin.routing.component';
import { ProfileRoutingModule } from './profilepage/profile/profile.routing.module';
import { AdminNavbarComponent } from './sharepage/navbar/admin-navbar/admin-navbar/admin-navbar.component';
import { UserNavbarComponent } from './sharepage/navbar/user-navbar/user-navbar/user-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CinemasComponent,
    LoginComponent,
    SignupComponent,
    BookingComponent,
    ProfileComponent,
    AdminComponent,
    AdminNavbarComponent,
    UserNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    AdminRoutingModule,
    ProfileRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
