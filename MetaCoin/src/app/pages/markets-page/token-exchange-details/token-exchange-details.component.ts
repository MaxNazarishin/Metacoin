import { Component } from '@angular/core';

@Component({
  selector: 'app-token-exchange-details',
  standalone: true,
  imports: [],
  templateUrl: './token-exchange-details.component.html',
  styleUrl: './token-exchange-details.component.scss'
})
export class TokenExchangeDetailsComponent {
  // template variables, need to be passed from parent component or fetched from service
  rate = '1 ETH = 1,985.98 USDT';
  inverseRate = '1 USDT = 0.0005 ETH';
  priceImpact = '0.01%';
  gwei = 'Slow: Gwei 32';
  estimateGasFee = '0.004002 ETH ~ $7.99';
  liquidityFee = '0.011 ETH';
}
