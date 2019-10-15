import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteoffphotoComponent } from './writeoffphoto.component';

describe('WriteoffphotoComponent', () => {
  let component: WriteoffphotoComponent;
  let fixture: ComponentFixture<WriteoffphotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteoffphotoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteoffphotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
