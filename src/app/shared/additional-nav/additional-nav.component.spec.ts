import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalNavComponent } from './additional-nav.component';

describe('AdditionalNavComponent', () => {
  let component: AdditionalNavComponent;
  let fixture: ComponentFixture<AdditionalNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionalNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
