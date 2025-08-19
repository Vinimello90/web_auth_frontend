import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { WebAuthAuthorization } from '../utils/webauth';
export const userGuard: CanActivateFn = (route, state) => {
  const auth = inject(WebAuthAuthorization);
  console.log(auth.isLoggedIn);
  return auth.isLoggedIn;
};
