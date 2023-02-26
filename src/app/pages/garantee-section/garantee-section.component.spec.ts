import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaranteeSectionComponent } from './garantee-section.component';

describe('GaranteeSectionComponent', () => {
  let component: GaranteeSectionComponent;
  let fixture: ComponentFixture<GaranteeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaranteeSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaranteeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
