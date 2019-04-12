import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiveTimerComponent } from './collective-timer.component';

describe('CollectiveTimerComponent', () => {
  let component: CollectiveTimerComponent;
  let fixture: ComponentFixture<CollectiveTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectiveTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectiveTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
