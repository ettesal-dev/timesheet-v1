import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserShiftComponent } from './list-user-shift.component';

describe('ListUserShiftComponent', () => {
  let component: ListUserShiftComponent;
  let fixture: ComponentFixture<ListUserShiftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListUserShiftComponent]
    });
    fixture = TestBed.createComponent(ListUserShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
