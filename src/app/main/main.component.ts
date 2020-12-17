import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/CourseService';
import {AuthenticationService} from '../services/authentication/authentication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private routerLink: any;


  constructor(private courseService: CourseService, public authenticationService: AuthenticationService) { }

  // patients: [];
  // selectedPatient = {
  //   // modules: []
  // };

  patients: [];
  selectedPatient = {
    modules: []
  };

  ngOnInit(): void {
    this.courseService.findAllPatients().then(patients => this.patients = patients);
  }

  // tslint:disable-next-line:typedef
  selectPatient(patient: never) {
    this.selectedPatient = patient;

  }

  logout(){
    this.authenticationService.logout();
  }

}
