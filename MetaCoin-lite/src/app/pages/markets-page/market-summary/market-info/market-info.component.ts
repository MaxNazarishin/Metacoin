import { Component } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-market-info',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './market-info.component.html',
  styleUrl: './market-info.component.scss'
})
export class MarketInfoComponent {
  totalLiquidity = { value: '$92.8M', change: 0.59 };
  volume24h = { value: '$7.4M', change: -36.56 };
  fees24h = { value: '$22,226', change: -36.56 };
}
