import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const securitymanagerGuard: CanActivateFn = async (route, state) => {
  const router: Router = inject(Router);
  // router.navigate([route.pathFromRoot]);
  // state.root;
  return true;
};
