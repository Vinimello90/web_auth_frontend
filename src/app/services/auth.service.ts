import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private token = inject(TokenService);

  isLoggedIn() {
    return this.http.get(`${environment.apiUrl}/users/me`, {
      headers: {
        authorization: `Bearer ${this.token.getToken}`,
      },
    });
  }
}
