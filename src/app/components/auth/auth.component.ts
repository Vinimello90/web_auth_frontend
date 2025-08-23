import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { switchMap } from 'rxjs';
import { WebAuthService } from '../../services/webauth.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  private router = inject(Router);
  private auth = inject(AuthService);
  private webAuth = inject(WebAuthService);
  private token = inject(TokenService);

  successMessage = signal('');
  errorMessage = signal('');

  userForm = new FormGroup({
    username: new FormControl('', { nonNullable: true }),
  });

  async onRegister() {
    const { username } = this.userForm.getRawValue();
    this.auth
      .createUser(username)
      .pipe(switchMap(() => this.webAuth.registerPasskey()))
      .subscribe({
        next: () => {
          this.errorMessage.set('');
          this.successMessage.set('User and Passkey registered successfully.');
        },
        error: ({ error }) => {
          this.successMessage.set('');
          this.errorMessage.set(error.message || 'Unexpected error');
        },
      });
  }

  onAuthenticate() {
    const { username } = this.userForm.getRawValue();

    this.webAuth.authenticatePasskey(username).subscribe({
      next: (token) => {
        this.errorMessage.set('');
        this.successMessage.set('');
        this.token.setToken(token);
        this.router.navigate(['/profile']);
      },
      error: ({ error = { message: 'Unexpected error' } }) => {
        this.successMessage.set('');
        this.errorMessage.set(error.message);
      },
    });
  }
}
