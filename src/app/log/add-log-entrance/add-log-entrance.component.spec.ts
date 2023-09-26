import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLogEntranceComponent } from './add-log-entrance.component';

describe('AddLogEntranceComponent', () => {
  let component: AddLogEntranceComponent;
  let fixture: ComponentFixture<AddLogEntranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLogEntranceComponent]
    });
    fixture = TestBed.createComponent(AddLogEntranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
