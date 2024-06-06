import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [NgClass],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent {
  isLoginPage: boolean = true;

  showLoginPage() {
    this.isLoginPage = true;
  }

  showSignUpPage() {
    this.isLoginPage = false;
  }
}
