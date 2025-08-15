import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <main>
      <section class="auth">
        <div class="auth__container">
          <form action="" class="auth__form">
            <label class="auth__label">
              <input type="text" class="auth__input" placeholder="E-mail or username" required />
            </label>
            <button type="submit" class="auth__button">Register Passkey</button>
            <button type="submit" class="auth__button">Authenticate</button>
          </form>
        </div>
      </section>
    </main>
  `,
  styleUrls: ['./main.component.css'],
})
export class MainComponent {}
