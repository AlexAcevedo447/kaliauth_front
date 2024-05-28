import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const authRouter: Route[] = [
  {
    path: 'login',
    component: LoginComponent,
    title: 'Kali - Login',
  },
];
