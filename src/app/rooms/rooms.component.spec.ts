import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ROOMSComponent } from './rooms.component';

describe('ROOMSComponent', () => {
  let component: ROOMSComponent;
  let fixture: ComponentFixture<ROOMSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ROOMSComponent]
    });
    fixture = TestBed.createComponent(ROOMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
