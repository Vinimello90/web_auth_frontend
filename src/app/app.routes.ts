import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { userGuard } from './user-guard';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [userGuard] },
  { path: '**', redirectTo: '' },
];
