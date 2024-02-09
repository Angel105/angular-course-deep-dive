import {AfterViewInit, Component, ContentChild, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CourseImageComponent} from '../course-image/course-image.component';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterViewInit {


  @Input({
    required: true
  })
  course: Course;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>;
  @Input() cardIndex!: number;

  @ContentChild(CourseImageComponent)
  image: CourseImageComponent;

  ngAfterViewInit() {
    console.log(this.image);
  }
  onCourseViewed() {
    this.courseEmitter.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if (this.course.category === 'BEGINNER') {
      return ['beginner'];
    }
  }

  cardStyles() {
    return {
      'background-image': 'url(' + this.course.iconUrl + ')'
    };
  }
}
