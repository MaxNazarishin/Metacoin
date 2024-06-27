import { Component, OnInit,OnDestroy  } from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {ThemeService} from "../../../../services/theme.service";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-barchart',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './barchart.component.html',
  styleUrl: './barchart.component.scss'
})
export class BarchartComponent implements OnInit, OnDestroy{
  isDarkTheme: boolean = false; // Инициализация переменной
  themeSubscription: Subscription = new Subscription();

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeSubscription = this.themeService.getThemeObservable().subscribe(isDark => {
      this.isDarkTheme = isDark;
    });
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
