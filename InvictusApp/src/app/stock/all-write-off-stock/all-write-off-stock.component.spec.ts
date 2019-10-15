import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllWriteOffStockComponent } from './all-write-off-stock.component';

describe('AllWriteOffStockComponent', () => {
  let component: AllWriteOffStockComponent;
  let fixture: ComponentFixture<AllWriteOffStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllWriteOffStockComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllWriteOffStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
