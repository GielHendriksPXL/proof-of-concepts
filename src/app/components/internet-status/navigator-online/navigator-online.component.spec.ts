import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorOnlineComponent } from './navigator-online.component';

describe('NavigatorOnlineComponent', () => {
  let component: NavigatorOnlineComponent;
  let fixture: ComponentFixture<NavigatorOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigatorOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
