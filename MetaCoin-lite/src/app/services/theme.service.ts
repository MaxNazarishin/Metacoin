import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkTheme = new BehaviorSubject<boolean>(false);

  constructor() {
    const savedTheme = localStorage.getItem('dark-theme');
    if (savedTheme) {
      this.darkTheme.next(JSON.parse(savedTheme));
    }
    this.updateTheme();
  }

  getThemeObservable() {
    return this.darkTheme.asObservable();
  }

  isDarkTheme(): boolean {
    return this.darkTheme.value;
  }

  toggleTheme(): void {
    this.darkTheme.next(!this.darkTheme.value);
    this.updateTheme();
    localStorage.setItem('dark-theme', JSON.stringify(this.darkTheme.value));
    this.updateTheme();
  }

  updateTheme(): void {
    const body = document.body;
    if (this.darkTheme.value) {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }
}
