import { Component } from '@angular/core';
import { AuthComponent } from './components/auth/auth.component';

@Component({
  selector: 'app-main',

  imports: [AuthComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {}
