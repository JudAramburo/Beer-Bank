import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderangeComponent } from './sliderange.component';

describe('SliderangeComponent', () => {
  let component: SliderangeComponent;
  let fixture: ComponentFixture<SliderangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
