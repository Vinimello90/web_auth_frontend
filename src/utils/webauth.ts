import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebAuthAuthorization {
  get isLoggedIn() {
    return false;
  }
}
