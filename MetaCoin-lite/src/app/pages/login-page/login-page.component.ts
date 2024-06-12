import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NgClass],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']  // Виправлено styleUrl -> styleUrls
})
export class LoginPageComponent {
  isLoginPage: boolean = true;

  constructor(private router: Router) { }

  showLoginPage() {
    this.isLoginPage = true;
  }

  showSignUpPage() {
    this.isLoginPage = false;
  }

  // Метод для перевірки форми та навігації
  submitForm(formId: string) {
    const form = document.getElementById(formId) as HTMLFormElement;
    if (form.checkValidity()) {
      this.router.navigate(['/final-page']);
    } else {
      form.reportValidity();
    }
  }

  // Метод для перевірки збігу паролів
  checkPasswords(passwordId: string, confirmPasswordId: string) {
    const password = (document.getElementById(passwordId) as HTMLInputElement).value;
    const confirmPassword = (document.getElementById(confirmPasswordId) as HTMLInputElement);

    if (password !== confirmPassword.value) {
      confirmPassword.setCustomValidity('Паролі не збігаються');
    } else {
      confirmPassword.setCustomValidity('');
    }
  }
}
