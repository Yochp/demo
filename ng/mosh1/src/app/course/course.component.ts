import { Component, OnInit, Input } from '@angular/core';
import {EmailService} from '../email.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title = 'list of courses';

  @Input() courses;

  constructor(emailService: EmailService) {
    this.courses = emailService.getCourse();
  }

  ngOnInit() {
  }

}
