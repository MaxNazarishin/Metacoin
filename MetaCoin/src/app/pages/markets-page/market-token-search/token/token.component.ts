import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-token-item',
  standalone: true,
  imports: [],
  templateUrl: './token.component.html',
  styleUrl: './token.component.scss'
})
export class TokenComponent {
  @Input() icon!: string;
  @Input() name!: string;
  @Input() amount!: number;
}
