import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  imports: [],
  template: `
    <section class="auth">
      <div class="auth__container">
        <form action="" class="auth__form">
          <label class="auth__label">
            <input type="text" class="auth__input" placeholder="E-mail or username" required />
          </label>
          <div class="auth__actions">
            <button type="submit" class="auth__button">Register Passkey</button>
            <button type="submit" class="auth__button">Authenticate</button>
          </div>
        </form>
      </div>
    </section>
  `,
  styleUrl: './auth.component.css',
})
export class AuthComponent {}
