import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
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

  isLoading = signal({ registering: true, authenticating: false });
  successMessage = signal('');
  errorMessage = signal('');

  userForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
  });

  onSubmit(action: string) {}

  onRegister() {
    const { username } = this.userForm.getRawValue();
    if (!username) {
      this.errorMessage.set('Please enter a username to register');
      return;
    }
    this.isLoading.update((state) => ({ ...state, registering: true }));
    this.webAuth
      .registerPasskey(username)
      .pipe(finalize(() => this.isLoading.update((state) => ({ ...state, registering: false }))))
      .subscribe({
        next: () => {
          this.errorMessage.set('');
          this.successMessage.set('Success! Now try to authenticate');
        },
        error: (err) => {
          console.log(err.name);
          this.successMessage.set('');
          if (err.name === 'NotAllowedError') {
            return;
          }
          if (err.name === 'InvalidStateError') {
            this.errorMessage.set('The authenticator was previously registered');
            return;
          }
          if (err.name === 'HttpErrorResponse') {
            this.errorMessage.set('Something went wrong on the server. Please try again later.');
            return;
          }
          this.errorMessage.set(err.message);
        },
      });
  }

  onAuthenticate() {
    const { username } = this.userForm.getRawValue();
    this.errorMessage.set('');
    this.successMessage.set('');
    if (!username) {
      this.errorMessage.set('Please enter a username to authenticate');
      return;
    }
    this.isLoading.update((state) => ({ ...state, authenticating: true }));
    this.webAuth
      .authenticatePasskey(username)
      .pipe(finalize(() => this.isLoading.update((state) => ({ ...state, authenticating: false }))))
      .subscribe({
        next: (token) => {
          this.token.setToken(token);
          this.router.navigate(['/profile']);
        },
        error: (err) => {
          console.log(err);
          if (err.name === 'NotAllowedError') {
            return;
          }
          this.errorMessage.set(
            err.error.message || 'Something went wrong on the server. Please try again later.'
          );
        },
      });
  }
}
