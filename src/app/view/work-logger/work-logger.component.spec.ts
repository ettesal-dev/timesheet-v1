import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkLoggerComponent } from './work-logger.component';

describe('WorkLoggerComponent', () => {
  let component: WorkLoggerComponent;
  let fixture: ComponentFixture<WorkLoggerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkLoggerComponent]
    });
    fixture = TestBed.createComponent(WorkLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
