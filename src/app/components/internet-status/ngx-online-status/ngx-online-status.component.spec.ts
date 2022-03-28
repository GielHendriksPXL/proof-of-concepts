import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxOnlineStatusComponent } from './ngx-online-status.component';

describe('NgxOnlineStatusComponent', () => {
  let component: NgxOnlineStatusComponent;
  let fixture: ComponentFixture<NgxOnlineStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxOnlineStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxOnlineStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
