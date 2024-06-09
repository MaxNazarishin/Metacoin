import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkTheme = false;

  constructor() {
    // Load theme from local storage or default to light theme
    const savedTheme = localStorage.getItem('dark-theme');
    if (savedTheme) {
      this.darkTheme = JSON.parse(savedTheme);
      // this.updateTheme();
    }
    this.updateTheme();
  }

  isDarkTheme(): boolean {
    return this.darkTheme;
  }

  toggleTheme(): void {
    this.darkTheme = !this.darkTheme;
    this.updateTheme();
    localStorage.setItem('dark-theme', JSON.stringify(this.darkTheme));
  }

  //Если будет проблема первичной инициализации убрать private
  private updateTheme(): void {
    const body = document.body;
    if (this.darkTheme) {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }

}
