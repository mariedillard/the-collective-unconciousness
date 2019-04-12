import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTimerComponent } from './user-timer.component';

describe('UserTimerComponent', () => {
  let component: UserTimerComponent;
  let fixture: ComponentFixture<UserTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
