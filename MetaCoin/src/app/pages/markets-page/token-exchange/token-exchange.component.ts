import { Component } from '@angular/core';
import {SendTokenComponent} from "./send-token/send-token.component";
import {ReceiveTokenComponent} from "./receive-token/receive-token.component";
import {AccountBalanceComponent} from "./account-balance/account-balance.component";
import {ActionButtonComponent} from "./action-button/action-button.component";

@Component({
  selector: 'app-token-exchange',
  standalone: true,
  imports: [
    SendTokenComponent,
    ReceiveTokenComponent,
    AccountBalanceComponent,
    ActionButtonComponent
  ],
  templateUrl: './token-exchange.component.html',
  styleUrl: './token-exchange.component.scss'
})
export class TokenExchangeComponent {
  // should be passed as input from parent component or from a service as well prices for conversion
  sendToken = {currency: 'ETH', amount: 0};
  receiveToken = {currency: 'USDT', amount: 0};

  // balance should be fetched from a service
  accountBalanceSendCurrency = 1;
  accountBalanceReceiveCurrency = 200;


  onSendAmountChange(amount: number) {
    this.sendToken.amount = amount;
    this.calculateReceivedAmount();
  }

  calculateReceivedAmount() {
    const conversionRate = 2000; // hardcoded conversion 1 eth = 2000 usd, should be passed as input from parent component
    this.receiveToken.amount = this.sendToken.amount * conversionRate;
  }

  isBalanceSufficient() {
    return this.accountBalanceSendCurrency >= this.sendToken.amount;
  }
}
