import { Injectable } from '@angular/core';
import {SigninData} from '../../model/signinData';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly mocKedUser = new SigninData('panit', 'panitpassword');
  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(signinData: SigninData): boolean{
  if (this.checkCredentials(signinData)){
    this.isAuthenticated = true;
    this.router.navigate(['/main']);
    return true;
  }
  this.isAuthenticated = false;
  return false;
  }
  private checkCredentials(signinData: SigninData): boolean{
    return this.checkUsername(signinData.getUsername()) && this.checkPassword(signinData.getPassword());
  }

  private checkUsername(username: string): boolean{
    return username === this.mocKedUser.getUsername();
  }
  private checkPassword(password: string): boolean{
    return password === this.mocKedUser.getPassword();
  }

  logout(){
    this.isAuthenticated = false;
    this.router.navigate([' ']);
  }
}
