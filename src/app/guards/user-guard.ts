import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
import { asyncScheduler, catchError, map, scheduled } from 'rxjs';

export const userGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const token = inject(TokenService);

  return auth.isLoggedIn().pipe(
    map((isAuth) => {
      if (token.getToken && isAuth) {
        return true;
      } else {
        return router.parseUrl('/');
      }
    }),
    catchError(() => {
      token.removeToken();
      return scheduled([router.parseUrl('/')], asyncScheduler);
    })
  );
};
