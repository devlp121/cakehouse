import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSheetComponent } from './cart-sheet.component';

describe('CartSheetComponent', () => {
  let component: CartSheetComponent;
  let fixture: ComponentFixture<CartSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
