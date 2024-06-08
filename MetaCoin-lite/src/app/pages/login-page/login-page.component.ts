import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [NgClass],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  isLoginPage: boolean = true;

  showLoginPage() {
    this.isLoginPage = true;
  }

  showSignUpPage() {
    this.isLoginPage = false;
  }


}


