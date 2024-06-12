import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTradingChartComponent } from './header-trading-chart.component';

describe('HeaderTradingChartComponent', () => {
  let component: HeaderTradingChartComponent;
  let fixture: ComponentFixture<HeaderTradingChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTradingChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderTradingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
