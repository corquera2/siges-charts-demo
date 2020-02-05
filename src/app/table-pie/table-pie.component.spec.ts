import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePieComponent } from './table-pie.component';

describe('TablePieComponent', () => {
  let component: TablePieComponent;
  let fixture: ComponentFixture<TablePieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
