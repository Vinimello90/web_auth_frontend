import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { WebAuthAuthorization } from '../utils/webauth';

export const userGuard: CanActivateFn = (route, state) => {
  const auth = inject(WebAuthAuthorization);
  const router = inject(Router);
  if (auth.isLoggedIn) {
    return true;
  } else {
    return router.parseUrl('/');
  }
};
