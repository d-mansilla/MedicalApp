import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { routing } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service.client';
import { CourseService } from './services/CourseService';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import {AuthguardServiceService} from "./security/authguard-service.service";
import { DetailsComponent } from './details/details.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    CourseNavigatorComponent,
    MainComponent,
    DetailsComponent,
    ForgetpasswordComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [
  UserService,
  CourseService,
    AuthguardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
