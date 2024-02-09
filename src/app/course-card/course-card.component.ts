import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  Output, QueryList,
  ViewChild
} from '@angular/core';
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
export class CourseCardComponent implements AfterViewInit, AfterContentInit {

  @Input({
    required: true
  })
  course: Course;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>;
  @Input() cardIndex!: number;

  @ContentChildren(CourseImageComponent, {read: ElementRef})
  images: QueryList<ElementRef>;

  ngAfterContentInit(): void {
    console.log(this.images);
  }

  ngAfterViewInit() {
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
