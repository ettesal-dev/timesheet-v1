import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWorkShiftComponent } from './add-work-shift.component';

describe('AddWorkShiftComponent', () => {
  let component: AddWorkShiftComponent;
  let fixture: ComponentFixture<AddWorkShiftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWorkShiftComponent]
    });
    fixture = TestBed.createComponent(AddWorkShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
