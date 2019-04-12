import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectiveTrackingComponent } from './collective-tracking.component';

describe('CollectiveTrackingComponent', () => {
  let component: CollectiveTrackingComponent;
  let fixture: ComponentFixture<CollectiveTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectiveTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectiveTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
