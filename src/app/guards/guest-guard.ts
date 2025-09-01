import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from '../services/token.service';

export const guestGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = inject(TokenService);

  if (!token.getToken) {
    return true;
  } else {
    return router.parseUrl('/profile');
  }
};
