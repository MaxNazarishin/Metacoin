import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from "../../services/theme.service";
import { NgClass } from "@angular/common";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  _isDarkTheme: boolean = false;
  isDropdownMenuActive = false;
  themeSubscription: Subscription;

  constructor(private themeService: ThemeService) {
    this.themeSubscription = new Subscription();
  }

  ngOnInit(): void {
    // Инициализация темы при запуске приложения
    this.themeSubscription = this.themeService.getThemeObservable().subscribe(isDark => {
      this._isDarkTheme = isDark;
    });
    // this.themeService.updateTheme();
    // Добавление слушателя события изменения размера окна
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  ngOnDestroy() {
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
    // Удаление слушателя события изменения размера окна
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  isDarkTheme(): boolean {
    return this.themeService.isDarkTheme();
  }

  toggleDropdownMenu() {
    this.isDropdownMenuActive = !this.isDropdownMenuActive;
  }

  handleResize() {
    if (window.innerWidth > 900 && this.isDropdownMenuActive) {
      this.isDropdownMenuActive = false;
    }
  }
}
