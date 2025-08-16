import { Component } from '@angular/core';
import { AuthComponent } from './components/auth/auth.component';

@Component({
  selector: 'app-main',
  imports: [AuthComponent],
  template: `
    <main class="main">
      <app-auth />
    </main>
  `,
  styleUrls: ['./main.component.css'],
})
export class MainComponent {}
