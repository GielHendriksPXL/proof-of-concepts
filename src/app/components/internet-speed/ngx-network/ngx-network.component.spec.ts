import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgNetworkStatusComponent } from './ngx-network.component';

describe('NgNetworkStatusComponent', () => {
  let component: NgNetworkStatusComponent;
  let fixture: ComponentFixture<NgNetworkStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgNetworkStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgNetworkStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
