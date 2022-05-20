import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImageCompressComponent } from './ngx-image-compress.component';

describe('NgxImageCompressComponent', () => {
  let component: NgxImageCompressComponent;
  let fixture: ComponentFixture<NgxImageCompressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxImageCompressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxImageCompressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
