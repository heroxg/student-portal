import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRegStatusComponent } from './course-reg-status.component';

describe('CourseRegStatusComponent', () => {
  let component: CourseRegStatusComponent;
  let fixture: ComponentFixture<CourseRegStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseRegStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRegStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
