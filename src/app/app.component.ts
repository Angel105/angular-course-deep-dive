import {Component, ViewChild} from '@angular/core';
import {COURSES} from '../db-data';
import {CourseCardComponent} from './course-card/course-card.component';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = COURSES;

  title = COURSES[1].description;

  course = COURSES[1];

  @ViewChild(CourseCardComponent)
  card: CourseCardComponent;

  onCourseSelected(course: Course) {
    console.log('This card: ', this.card);
  }
}
