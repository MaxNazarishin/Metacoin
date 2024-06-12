import { Component } from '@angular/core';
import {MarketSummaryComponent} from "./market-summary/market-summary.component";
import {MarketTokenSearchComponent} from "./market-token-search/market-token-search.component";
import {TradingChartComponent} from "./trading-chart/trading-chart.component";
import {ChartInfoComponent} from "./chart-info/chart-info.component";
import {TokenExchangeComponent} from "./token-exchange/token-exchange.component";
import {TokenExchangeDetailsComponent} from "./token-exchange-details/token-exchange-details.component";
// import {PooledTokensComponent} from "./market-summary/pooled-tokens/pooled-tokens.component";
// import {MarketInfoComponent} from "./market-summary/market-info/market-info.component";

// import {MarketTokenSearchComponent} from "./market-token-search/market-token-search.component";
// import {TradingChartComponent} from "./trading-chart/trading-chart.component";
// import {HeaderTradingChartComponent} from "./trading-chart/header-trading-chart/header-trading-chart.component";
// import {ChartInfoComponent} from "./chart-info/chart-info.component";
// import {TokenExchangeComponent} from "./token-exchange/token-exchange.component";
// import {TokenExchangeDetailsComponent} from "./token-exchange-details/token-exchange-details.component";

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
    TokenExchangeDetailsComponent,
    // PooledTokensComponent,
    // MarketInfoComponent,
    // SearchBoxComponent,
    // MarketTokenSearchComponent,
    // TradingChartComponent,
    // HeaderTradingChartComponent,
    // ChartInfoComponent,
    // TokenExchangeComponent,
    // TokenExchangeDetailsComponent
  ],
  styleUrl: './markets-page.component.scss'
})
export class MarketsPageComponent {
  test= 'rendered from markets-page component';
  constructor() { }

  ngOnInit(): void {
    // Initialization code
  }

  ngOnDestroy(): void {
    // Cleanup code
  }
}
