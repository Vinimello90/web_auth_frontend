import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, switchMap } from 'rxjs';
import { startAuthentication, startRegistration } from '@simplewebauthn/browser';

@Injectable({
  providedIn: 'root',
})
export class WebAuthService {
  private http = inject(HttpClient);

  private verifyRegistration(options: any) {
    return this.http.post('http://localhost:3001/passkeys/register/verify', options, {
      withCredentials: true,
    });
  }

  private getRegistrationOptions() {
    return this.http.post(
      'http://localhost:3001/passkeys/register/options',
      {},
      { withCredentials: true }
    );
  }

  private startPasskeyRegistration(options: any) {
    return from(startRegistration({ optionsJSON: options }));
  }

  private verifyAuthentication(options: any) {
    return this.http.post('http://localhost:3001/passkeys/authentication/verify', options, {
      withCredentials: true,
    });
  }

  private getAuthenticationOptions(username: any) {
    return this.http.post(
      'http://localhost:3001/passkeys/authentication/options',
      { username: username },
      { withCredentials: true }
    );
  }

  private startPasskeyAuthentication(options: any) {
    return from(startAuthentication({ optionsJSON: options }));
  }

  registerPasskey() {
    return this.getRegistrationOptions().pipe(
      switchMap((options) => this.startPasskeyRegistration(options)),
      switchMap((result) => this.verifyRegistration(result))
    );
  }

  authenticatePasskey(username: any) {
    return this.getAuthenticationOptions(username).pipe(
      switchMap((options) => this.startPasskeyAuthentication(options)),
      switchMap((result) => this.verifyAuthentication(result))
    );
  }

  get isLoggedIn() {
    return false;
  }
}
