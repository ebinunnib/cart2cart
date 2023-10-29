import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMComponent } from './product-m.component';

describe('ProductMComponent', () => {
  let component: ProductMComponent;
  let fixture: ComponentFixture<ProductMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductMComponent]
    });
    fixture = TestBed.createComponent(ProductMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
