import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSucsessComponent } from './order-sucsess.component';

describe('OrderSucsessComponent', () => {
  let component: OrderSucsessComponent;
  let fixture: ComponentFixture<OrderSucsessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSucsessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSucsessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
