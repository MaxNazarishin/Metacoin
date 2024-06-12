import {Component, Input, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-prices-trading-chart',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './prices-trading-chart.component.html',
  styleUrl: './prices-trading-chart.component.scss'
})
export class PricesTradingChartComponent implements OnInit{
  @Input() token_price!: number;
  prices: number[] = [];

  getRelatedPrices(currentPrice: number): number[] {
    const basePrice = currentPrice;
    const stepPercentage = 2; // decided to take 2% for each price step, so it can work with different crypto prices
    const stepsBelow = 3; // in the image only 3 prices below current one
    const stepsAbove = 10; // 10 prices above current one

    const prices = [];

    // generate higher prices
    for (let i = stepsAbove; i >= 1; i--) {
      const stepFactor = 1 + (i * stepPercentage / 100);
      prices.push(basePrice * stepFactor);
    }

    // add the current price
    prices.push(basePrice);

    // get 3 prices below current
    for (let i = 0; i < stepsBelow; i++) {
      const stepFactor = 1 - (i * stepPercentage / 100);
      prices.push(basePrice * stepFactor);
    }

    return prices;
  }

  ngOnInit(): void {
    this.prices = this.getRelatedPrices(this.token_price);
  }
}
