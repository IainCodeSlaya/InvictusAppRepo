import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteoffphotoPage } from './writeoffphoto.page';

describe('WriteoffphotoPage', () => {
  let component: WriteoffphotoPage;
  let fixture: ComponentFixture<WriteoffphotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteoffphotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteoffphotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
