import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserShiftComponent } from './update-user-shift.component';

describe('UpdateUserShiftComponent', () => {
  let component: UpdateUserShiftComponent;
  let fixture: ComponentFixture<UpdateUserShiftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUserShiftComponent]
    });
    fixture = TestBed.createComponent(UpdateUserShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
