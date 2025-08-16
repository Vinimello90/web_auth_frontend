import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  userForm = new FormGroup({
    user: new FormControl(''),
  });

  onRegister() {
    console.log({ register: this.userForm.value.user });
  }

  onAuthenticate() {
    console.log({ authenticate: this.userForm.value.user });
  }
}
