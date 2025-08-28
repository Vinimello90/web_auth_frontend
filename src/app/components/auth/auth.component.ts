import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { WebAuthService } from '../../services/webauth.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  private router = inject(Router);
  private webAuth = inject(WebAuthService);
  private token = inject(TokenService);

  isLoading = signal({ registering: false, authenticating: false });
  successMessage = signal('');
  errorMessage = signal('');

  userForm = new FormGroup({
    username: new FormControl('', { nonNullable: true }),
  });

  async onRegister() {
    const { username } = this.userForm.getRawValue();
    this.isLoading.update((state) => ({ ...state, registering: true }));
    this.webAuth
      .registerPasskey(username)
      .pipe(finalize(() => this.isLoading.update((state) => ({ ...state, registering: false }))))
      .subscribe({
        next: () => {
          this.errorMessage.set('');
          this.successMessage.set('User and Passkey registered successfully.');
        },
        error: (err) => {
          if (err.name === 'NotAllowedError') {
            return;
          }
          this.successMessage.set('');
          this.errorMessage.set(err.message || 'Unexpected error');
        },
      });
  }

  onAuthenticate() {
    const { username } = this.userForm.getRawValue();
    this.isLoading.update((state) => ({ ...state, authenticating: true }));
    this.webAuth
      .authenticatePasskey(username)
      .pipe(finalize(() => this.isLoading.update((state) => ({ ...state, authenticating: false }))))
      .subscribe({
        next: (token) => {
          this.errorMessage.set('');
          this.successMessage.set('');
          this.token.setToken(token);
          this.router.navigate(['/profile']);
        },
        error: (err) => {
          if (err.name === 'NotAllowedError') {
            return;
          }
          this.successMessage.set('');
          this.errorMessage.set(err.error.message || 'Unexpected error');
        },
      });
  }
}
