import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="header">
      <div class="header__top">
        <img src="../../../assets/logo.svg" alt="logo" class="header__logo" />
        <div class="header__container-title">
          <h1 class="header__title">Web Authentication</h1>
          <h2 class="header__sub-title">Secure & Password-Free Login</h2>
        </div>
      </div>
      <p class="header__description">
        This project demonstrates modern, secure authentication using WebAuthn. Users can log in
        passwordlessly, providing a faster, safer, and more seamless experience while eliminating
        the risks associated with traditional passwords.
      </p>
    </header>
  `,
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {}
