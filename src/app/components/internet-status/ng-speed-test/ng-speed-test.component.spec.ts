import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSpeedTestComponent } from './ng-speed-test.component';

describe('NgSpeedTestComponent', () => {
  let component: NgSpeedTestComponent;
  let fixture: ComponentFixture<NgSpeedTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgSpeedTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSpeedTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
