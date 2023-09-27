import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWorkShiftComponent } from './update-work-shift.component';

describe('UpdateWorkShiftComponent', () => {
  let component: UpdateWorkShiftComponent;
  let fixture: ComponentFixture<UpdateWorkShiftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateWorkShiftComponent]
    });
    fixture = TestBed.createComponent(UpdateWorkShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
