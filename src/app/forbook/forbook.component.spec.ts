import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbookComponent } from './forbook.component';

describe('ForbookComponent', () => {
  let component: ForbookComponent;
  let fixture: ComponentFixture<ForbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForbookComponent]
    });
    fixture = TestBed.createComponent(ForbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
