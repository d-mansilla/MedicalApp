import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
  // findAllCourses = () => fetch('http://localhost:8080/api/courses').then(response => response.json());
  // tslint:disable-next-line:max-line-length
  findAllCourses = () => fetch('http://blackboardbackend-env-1.eba-caqezr7x.us-east-2.elasticbeanstalk.com/api/courses').then(response => response.json());

}
