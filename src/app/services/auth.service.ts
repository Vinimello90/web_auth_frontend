import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  private generateRegistrationOption() {}

  private verifyRegisterOption() {}

  createUser(username: string) {
    return this.http.post(
      'http://localhost:3001/signup',
      { username: username },
      { observe: 'response' }
    );
  }

  get isLoggedIn() {
    return false;
  }
}
