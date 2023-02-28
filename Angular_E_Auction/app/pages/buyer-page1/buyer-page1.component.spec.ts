import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerPage1Component } from './buyer-page1.component';

describe('BuyerPage1Component', () => {
  let component: BuyerPage1Component;
  let fixture: ComponentFixture<BuyerPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyerPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyerPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
