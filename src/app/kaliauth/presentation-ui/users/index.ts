import { Route } from '@angular/router';
import { IndexComponent } from './index/index.component';

const userComponents = [IndexComponent];

export const userRouter: Route[] = [
  {
    path: 'users',
    component: IndexComponent,
  },
];

export default userComponents;
