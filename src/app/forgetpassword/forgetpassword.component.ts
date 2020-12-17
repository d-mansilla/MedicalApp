import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  isFormInvalid = false;
  errorActive = ' ';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm){
    if (!signInForm.valid){
      this.isFormInvalid = true;
      this.errorActive = 'active';
      return;
    }
    this.router.navigate(['/login']);
  }

}
