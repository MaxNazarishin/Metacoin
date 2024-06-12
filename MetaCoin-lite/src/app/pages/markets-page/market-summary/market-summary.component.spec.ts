import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketSummaryComponent } from './market-summary.component';

describe('MarketSummaryComponent', () => {
  let component: MarketSummaryComponent;
  let fixture: ComponentFixture<MarketSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarketSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
