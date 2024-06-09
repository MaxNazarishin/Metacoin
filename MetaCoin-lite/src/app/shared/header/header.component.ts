import {
  Component
  // ,OnInit
} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent
  // implements OnInit
{
  constructor(private themeService: ThemeService) {
  }

  //Если будет проблема первичной инициализации расскоментить
  // ngOnInit(): void {
  //   // Инициализация темы при запуске приложения
  //   this.themeService.updateTheme();
  // }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  isDarkTheme(): boolean {
    return this.themeService.isDarkTheme();
  }
}
