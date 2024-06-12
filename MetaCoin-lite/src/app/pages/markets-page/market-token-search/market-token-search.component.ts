import { Component } from '@angular/core';
import {SearchBoxComponent} from "./search-box/search-box.component";
import {TokenListComponent} from "./token-list/token-list.component";

@Component({
  selector: 'app-market-token-search',
  standalone: true,
  imports: [
    SearchBoxComponent,
    TokenListComponent
  ],
  templateUrl: './market-token-search.component.html',
  styleUrl: './market-token-search.component.scss'
})
export class MarketTokenSearchComponent {
  tokens = [
    { icon: 'assets/img/market/coin_logos/eth_logo.png', name: 'ETH', amount: 0 },
    { icon: 'assets/img/market/coin_logos/eth_logo.png', name: 'USDT', amount: 0 },
    { icon: 'assets/img/market/coin_logos/eth_logo.png', name: 'USDC', amount: 0 },
    { icon: 'assets/img/market/coin_logos/eth_logo.png', name: 'XRP', amount: 0 },
    { icon: 'assets/img/market/coin_logos/eth_logo.png', name: 'SOL', amount: 0 },
    { icon: 'assets/img/market/coin_logos/eth_logo.png', name: 'SOL', amount: 0 },
    { icon: 'assets/img/market/coin_logos/eth_logo.png', name: 'SOL', amount: 0 },
    { icon: 'assets/img/market/coin_logos/eth_logo.png', name: 'SOL', amount: 0 },
    { icon: 'assets/img/market/coin_logos/eth_logo.png', name: 'SOL', amount: 0 },
    { icon: 'assets/img/market/coin_logos/eth_logo.png', name: 'SOL', amount: 0 },
    { icon: 'assets/img/market/coin_logos/eth_logo.png', name: 'SOL', amount: 0 },

  ];
}

