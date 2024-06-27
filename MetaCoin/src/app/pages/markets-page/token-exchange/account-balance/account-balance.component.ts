import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-account-balance',
  standalone: true,
  imports: [],
  templateUrl: './account-balance.component.html',
  styleUrl: './account-balance.component.scss'
})
export class AccountBalanceComponent {
  @Input() sendToken!: {currency: string, balance: number};
  @Input() receiveToken!: {currency: string, balance: number};
}
