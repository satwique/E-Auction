import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBidComponent } from './show-bid.component';

describe('ShowBidComponent', () => {
  let component: ShowBidComponent;
  let fixture: ComponentFixture<ShowBidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBidComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
