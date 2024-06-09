import {Component} from '@angular/core';
import {NgClass} from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NgClass],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  isLoginPage: boolean = true;

  constructor(private router: Router) {
  }

  showLoginPage() {
    this.isLoginPage = true;
  }

  showSignUpPage() {
    this.isLoginPage = false;
  }

  // Метод для проверки формы и навигации
  submitForm(formId: string) {
    const form = document.getElementById(formId) as HTMLFormElement;
    if (form.checkValidity()) {
      this.router.navigate(['/final-page']);
    } else {
      form.reportValidity();
    }
  }

}


