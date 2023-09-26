import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLogExitComponent } from './add-log-exit.component';

describe('AddLogExitComponent', () => {
  let component: AddLogExitComponent;
  let fixture: ComponentFixture<AddLogExitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLogExitComponent]
    });
    fixture = TestBed.createComponent(AddLogExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
