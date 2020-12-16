import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import {MainComponent} from "./main/main.component";
import {AuthguardServiceService} from "./security/authguard-service.service";
import {AuthenticationGuard} from "./security/authentication.guard";


const routes: Routes = [
  { path: 'course', component: CourseNavigatorComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'main/:userId', component: MainComponent, canActivate: [AuthenticationGuard]},
  { path: 'profile/:userId', component: ProfileComponent},
  { path: '', component: LoginComponent}
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
