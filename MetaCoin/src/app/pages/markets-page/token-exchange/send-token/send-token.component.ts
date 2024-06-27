import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-send-token',
  standalone: true,
  imports: [],
  templateUrl: './send-token.component.html',
  styleUrl: './send-token.component.scss'
})
export class SendTokenComponent implements OnInit {
  @Input() currency!: string;
  @Output() amountSelected = new EventEmitter<number>();

  amountDefault: number = 0;
  sliderValue!: number;

  ngOnInit() {
    this.sliderValue = this.amountDefault;
  }

  onSliderChange(event: any) {
    this.sliderValue = parseFloat(event.target.value);
    this.amountSelected.emit(this.sliderValue);
  }
}
