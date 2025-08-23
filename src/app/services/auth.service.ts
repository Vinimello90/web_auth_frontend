import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private token = inject(TokenService);

  createUser(username: any) {
    return this.http.post(
      'http://localhost:3001/signup',
      { username: username },
      { withCredentials: true }
    );
  }

  isLoggedIn() {
    return this.http.get('http://localhost:3001/users/me', {
      headers: {
        authorization: `Bearer ${this.token.getToken}`,
      },
    });
  }
}
