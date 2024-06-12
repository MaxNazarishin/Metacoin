import {Component, Input} from '@angular/core';
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-header-trading-chart',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './header-trading-chart.component.html',
  styleUrl: './header-trading-chart.component.scss'
})
export class HeaderTradingChartComponent {
  @Input() icon!: string;
  @Input() name!: string;
  @Input() price!: number;
}
