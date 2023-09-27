import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWorkShiftComponent } from './list-work-shift.component';

describe('ListWorkShiftComponent', () => {
  let component: ListWorkShiftComponent;
  let fixture: ComponentFixture<ListWorkShiftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListWorkShiftComponent]
    });
    fixture = TestBed.createComponent(ListWorkShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
