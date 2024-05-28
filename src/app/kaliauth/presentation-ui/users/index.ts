import { Route } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { securitymanagerGuard } from '@kaliauthinfra/guards/securitymanager.guard';

export const userRouter: Route[] = [
  {
    path: 'users',
    component: IndexComponent,
    canActivate: [securitymanagerGuard],
    title: 'Kali - Users',
  },
];
