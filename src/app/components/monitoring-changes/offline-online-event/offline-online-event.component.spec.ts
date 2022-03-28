import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineOnlineEventComponent } from './offline-online-event.component';

describe('OfflineOnlineEventComponent', () => {
  let component: OfflineOnlineEventComponent;
  let fixture: ComponentFixture<OfflineOnlineEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflineOnlineEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineOnlineEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
