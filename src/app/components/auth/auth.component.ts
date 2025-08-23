import { Component, inject, Pipe, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  private auth = inject(AuthService);

  successMessage = signal('');
  errorMessage = signal('');

  userForm = new FormGroup({
    username: new FormControl('', { nonNullable: true }),
  });

  async onRegister() {
    const { username } = this.userForm.getRawValue();
    this.auth
      .createUser(username)
      // .pipe(switchMap(() => this.auth.createUser(username)))
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
    console.log({ authenticate: this.userForm.value.username });
  }
}
