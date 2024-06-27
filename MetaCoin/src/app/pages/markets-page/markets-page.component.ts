import { Component } from '@angular/core';
import {MarketSummaryComponent} from "./market-summary/market-summary.component";
import {MarketTokenSearchComponent} from "./market-token-search/market-token-search.component";
import {TradingChartComponent} from "./trading-chart/trading-chart.component";
import {ChartInfoComponent} from "./chart-info/chart-info.component";
import {TokenExchangeComponent} from "./token-exchange/token-exchange.component";
import {TokenExchangeDetailsComponent} from "./token-exchange-details/token-exchange-details.component";

@Component({
  selector: 'app-markets-page',
  standalone: true,
  templateUrl: './markets-page.component.html',
  imports: [
    MarketSummaryComponent,
    MarketTokenSearchComponent,
    TradingChartComponent,
    ChartInfoComponent,
    TokenExchangeComponent,
    TokenExchangeDetailsComponent
  ],
  styleUrl: './markets-page.component.scss'
})
export class MarketsPageComponent {
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
