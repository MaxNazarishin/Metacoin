import { Component } from '@angular/core';
import {MarketInfoComponent} from "./market-info/market-info.component";
import {PooledTokensComponent} from "./pooled-tokens/pooled-tokens.component";

@Component({
  selector: 'app-market-summary',
  standalone: true,
  imports: [
    MarketInfoComponent,
    PooledTokensComponent
  ],
  templateUrl: './market-summary.component.html',
  styleUrl: './market-summary.component.scss'
})
export class MarketSummaryComponent {

}
