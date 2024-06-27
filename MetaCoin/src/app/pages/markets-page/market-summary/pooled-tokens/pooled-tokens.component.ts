import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

// component for the tokens in the trading pair chosen e.g. ETH/USDT
@Component({
  selector: 'app-pooled-tokens',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './pooled-tokens.component.html',
  styleUrl: './pooled-tokens.component.scss'
})
export class PooledTokensComponent {
  tokens = [
    { name: 'ETH', logo: 'assets/img/market/coin_logos/eth_logo.png' },
    { name: 'USDT', logo: 'assets/img/market/coin_logos/usdt_logo.png' }
  ];
}
