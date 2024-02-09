import {Component, ElementRef, ViewChild} from '@angular/core';
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

  @ViewChild('cardRef1', {read: ElementRef})
  card1: ElementRef;

  @ViewChild('container')
  containerDiv: ElementRef;

  constructor() {
    console.log('This card1: ', this.card1);
  }

  onCourseSelected(course: Course) {
    console.log('This card1: ', this.card1);
  }
}
