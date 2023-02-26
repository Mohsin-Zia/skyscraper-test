import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulebuttonComponent } from './schedulebutton.component';

describe('SchedulebuttonComponent', () => {
  let component: SchedulebuttonComponent;
  let fixture: ComponentFixture<SchedulebuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulebuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
