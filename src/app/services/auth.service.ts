import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private token = inject(TokenService);

  isLoggedIn() {
    return this.http.get('https://api.webauth.protechadvanced.com/users/me', {
      headers: {
        authorization: `Bearer ${this.token.getToken}`,
      },
    });
  }
}
