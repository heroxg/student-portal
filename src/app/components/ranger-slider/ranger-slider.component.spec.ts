import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangerSliderComponent } from './ranger-slider.component';

describe('RangerSliderComponent', () => {
  let component: RangerSliderComponent;
  let fixture: ComponentFixture<RangerSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangerSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangerSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
