import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
  // findAllPatients = () => fetch('http://localhost:8080/api/patients').then(response => response.json());
  // tslint:disable-next-line:max-line-length
  findAllPatients = () => fetch('http://patientbackend-env.eba-epmwqesg.us-east-2.elasticbeanstalk.com/api/patients').then(response => response.json());


}
