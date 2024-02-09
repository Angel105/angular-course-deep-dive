import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
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

  title = COURSES[1].description;

  course = COURSES[1];

  @ViewChild('cardRef1', {read: ElementRef})
  card1: ElementRef;

  @ViewChild('courseImage')
  courseImage: ElementRef;

  constructor() {
  }

  ngAfterViewInit() {
    console.log('Inside ngAfterViewInit. This courseImage: ', this.courseImage);
  }

  onCourseSelected(course: Course) {
  }
}
