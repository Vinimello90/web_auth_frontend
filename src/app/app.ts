import { Component, signal } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, MainComponent, FooterComponent],
  template: `
    <div class="page">
      <app-header />
      <!-- <app-main />
      <app-footer /> -->
    </div>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('Web Authentication');
}
