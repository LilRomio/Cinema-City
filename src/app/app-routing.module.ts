import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './sharepage/login/login.component';
import { CinemasComponent } from './sharepage/pages/cinemas/cinemas.component';
import { HomeComponent } from './sharepage/pages/home/home.component';
import { SignupComponent } from './sharepage/signup/signup.component';
import { BookingComponent } from './sharepage/pages/booking/booking.component';
import { ProfileComponent } from './profilepage/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminComponent } from './profilepage/admin/admin.component';

const routes: Routes = [
//   {
//     path:'admin',
//     component: AdminComponent,
//     canActivate: [AuthGuard],
//     children: [
//       {
//         path: '',
//         component: HomeComponent
//       }
//     ]
//   }
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'cinemas', component: CinemasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'admin', canActivate: [AuthGuard], loadChildren: () => import('./profilepage/admin/admin/admin.module').then((m) => m.AdminModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
