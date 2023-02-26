import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSessionComponent } from './footer-session.component';

describe('FooterSessionComponent', () => {
  let component: FooterSessionComponent;
  let fixture: ComponentFixture<FooterSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
