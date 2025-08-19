import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="page">
      <app-header />
      <main class="main">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('Web Authentication');
}
