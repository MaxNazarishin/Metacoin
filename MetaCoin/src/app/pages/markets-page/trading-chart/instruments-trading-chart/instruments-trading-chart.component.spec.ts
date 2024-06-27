import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentsTradingChartComponent } from './instruments-trading-chart.component';

describe('InstrumentsTradingChartComponent', () => {
  let component: InstrumentsTradingChartComponent;
  let fixture: ComponentFixture<InstrumentsTradingChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstrumentsTradingChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstrumentsTradingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
