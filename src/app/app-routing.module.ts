import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {MainComponent} from "./main/main.component";
import {AuthguardServiceService} from "./security/authguard-service.service";
import {AuthenticationGuard} from "./security/authentication.guard";
import {ForgetpasswordComponent} from './forgetpassword/forgetpassword.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'main', component: MainComponent, canActivate: [AuthenticationGuard]},
  { path: 'profile/:userId', component: ProfileComponent},
  { path: ' ', component: LoginComponent},
  { path: 'forgotpassword', component: ForgetpasswordComponent},
  { path: '**', redirectTo: ' '}
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
