import { Route } from '@angular/router';
import { authRouter } from '@kaliauthui/auth';
import { userRouter } from '@kaliauthui/users';

const kaliAuthRoutes: Route[] = [...userRouter, ...authRouter];

export default kaliAuthRoutes;
