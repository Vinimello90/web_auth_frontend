import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { userGuard } from './user-guard';
import { ProfileComponent } from './components/profile/profile.component';
import { guestGuard } from './guest-guard';

export const routes: Routes = [
  { path: '', component: AuthComponent, canActivate: [guestGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [userGuard] },
  { path: '**', redirectTo: '' },
];
