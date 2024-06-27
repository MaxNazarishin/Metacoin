import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesTradingChartComponent } from './prices-trading-chart.component';

describe('PricesTradingChartComponent', () => {
  let component: PricesTradingChartComponent;
  let fixture: ComponentFixture<PricesTradingChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricesTradingChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PricesTradingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
