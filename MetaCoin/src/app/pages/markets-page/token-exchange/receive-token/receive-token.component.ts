import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-receive-token',
  standalone: true,
  imports: [],
  templateUrl: './receive-token.component.html',
  styleUrl: './receive-token.component.scss'
})
export class ReceiveTokenComponent {
  @Input() amountToReceive!: number;
  @Input() currency!: string;
}
