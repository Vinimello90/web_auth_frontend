import { Component, inject } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile.component',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  private tokenService = inject(TokenService);
  private router = inject(Router);

  onLogout() {
    this.tokenService.removeToken();
    this.router.navigate(['']);
  }
}
