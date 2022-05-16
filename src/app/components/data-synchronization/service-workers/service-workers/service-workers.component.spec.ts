import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceWorkersComponent } from './service-workers.component';

describe('ServiceWorkersComponent', () => {
  let component: ServiceWorkersComponent;
  let fixture: ComponentFixture<ServiceWorkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceWorkersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
