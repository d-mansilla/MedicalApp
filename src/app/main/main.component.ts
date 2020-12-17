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

  courses: [];
  selectedCourse = {
    modules: []
  };

  ngOnInit(): void {
    this.courseService.findAllCourses().then(courses => this.courses = courses);
  }

  selectCourse(course: never) {
    this.selectedCourse = course;

  }

  logout(){
    this.authenticationService.logout();
  }

}
