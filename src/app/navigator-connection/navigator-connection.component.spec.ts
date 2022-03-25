import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorConnectionComponent } from './navigator-connection.component';

describe('NavigatorConnectionComponent', () => {
  let component: NavigatorConnectionComponent;
  let fixture: ComponentFixture<NavigatorConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigatorConnectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
