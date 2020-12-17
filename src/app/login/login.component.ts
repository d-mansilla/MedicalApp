import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service.client';
import {NgForm} from '@angular/forms';
import {AuthenticationService} from '../services/authentication/authentication.service';
import {SigninData} from '../model/signinData';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //class variables
  // username: string;
  // password: string;
  errorActive = ' ';
  isFormInvalid = false;
  areCredentialsInvalid = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit(signInForm: NgForm){
  if (!signInForm.valid){
    this.isFormInvalid = true;
    this.areCredentialsInvalid = false;
    this.errorActive = 'active';
    return;
  }
  this.checkCredentials(signInForm);
  // console.log(signInForm.value);
  }
  // tslint:disable-next-line:typedef
  private checkCredentials(signInForm: NgForm){
    const signinData = new SigninData(signInForm.value.username, signInForm.value.password);
    if (!this.authenticationService.authenticate(signinData)){
      this.isFormInvalid = false;
      this.areCredentialsInvalid = true;
      this.errorActive = 'active';
    }
  }
  // login(username, password) {
  //   console.log(username, password);
  //   const user = this.userService.findUserByCredentials(username, password);
  //   if(user != null)
  //   {
  //     this.router.navigate( ['main', user._id]);
  //   }
  //   else
  //   {
  //     this.errorMessage='Username or Password Incorrect';
  //     this.errorActive='active';
  //   }
  // }


}




