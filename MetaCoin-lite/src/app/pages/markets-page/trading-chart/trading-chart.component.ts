import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {HeaderTradingChartComponent} from "./header-trading-chart/header-trading-chart.component";
import {BarchartComponent} from "./barchart/barchart.component";
import {InstrumentsTradingChartComponent} from "./instruments-trading-chart/instruments-trading-chart.component";
import {PricesTradingChartComponent} from "./prices-trading-chart/prices-trading-chart.component";

@Component({
  selector: 'app-trading-chart',
  standalone: true,
  imports: [
    NgOptimizedImage,
    HeaderTradingChartComponent,
    BarchartComponent,
    InstrumentsTradingChartComponent,
    PricesTradingChartComponent,
  ],
  templateUrl: './trading-chart.component.html',
  styleUrl: './trading-chart.component.scss'
})
export class TradingChartComponent {
  icon: string = 'assets/img/market/coin_logos/eth_logo.png';
  name: string = 'ETH';
  price: number = 2000;
}
