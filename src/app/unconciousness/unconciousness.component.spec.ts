import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnconciousnessComponent } from './unconciousness.component';

describe('UnconciousnessComponent', () => {
  let component: UnconciousnessComponent;
  let fixture: ComponentFixture<UnconciousnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnconciousnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnconciousnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
