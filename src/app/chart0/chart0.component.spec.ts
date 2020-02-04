import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chart0Component } from './chart0.component';

describe('Chart0Component', () => {
  let component: Chart0Component;
  let fixture: ComponentFixture<Chart0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chart0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chart0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
