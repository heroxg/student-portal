import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsLinkComponent } from './complaints-link.component';

describe('ComplaintsLinkComponent', () => {
  let component: ComplaintsLinkComponent;
  let fixture: ComponentFixture<ComplaintsLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintsLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
