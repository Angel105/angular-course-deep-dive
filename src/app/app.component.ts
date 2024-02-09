import {AfterViewInit, Component, ElementRef, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {CourseCardComponent} from './course-card/course-card.component';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  courses = COURSES;

  @ViewChildren(CourseCardComponent)
  cards;
  constructor() {
  }

  ngAfterViewInit() {
    console.log('These cards: ', this.cards);
  }

  onCourseSelected(course: Course) {
  }
}
