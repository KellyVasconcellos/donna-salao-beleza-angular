import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendariocoComponent } from './calendarioco.component';

describe('CalendariocoComponent', () => {
  let component: CalendariocoComponent;
  let fixture: ComponentFixture<CalendariocoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendariocoComponent]
    });
    fixture = TestBed.createComponent(CalendariocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
