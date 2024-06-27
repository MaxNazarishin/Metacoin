import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NgClass],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
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

  submitForm(formId: string) {
    const form = document.getElementById(formId) as HTMLFormElement;
    if (form.checkValidity()) {
      this.router.navigate(['/final-page']);
    } else {
      form.reportValidity();
    }
  }

  checkPasswords(passwordId: string, confirmPasswordId: string) {
    const password = (document.getElementById(passwordId) as HTMLInputElement).value;
    const confirmPassword = (document.getElementById(confirmPasswordId) as HTMLInputElement);

    if (password !== confirmPassword.value) {
      confirmPassword.setCustomValidity('Пароли не совпадают');
    } else {
      confirmPassword.setCustomValidity('');
    }
  }
}
