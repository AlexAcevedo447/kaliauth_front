import {
  HttpEvent,
  HttpEventType,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import IServerResponse from '@kaliauthdomain/contracts/server.response';
import { InfraNotificationCommand } from '@kaliauthinfra/commands/notification/notification.command';
import { Observable, tap, catchError, throwError } from 'rxjs';

export const globalInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn,
): Observable<HttpEvent<IServerResponse<any>>> => {
  const notificationCommand: InfraNotificationCommand = inject(
    InfraNotificationCommand,
  );

  return next(req).pipe(
    tap((event: HttpEvent<any>) => {
      if (event.type === HttpEventType.Response) {
        notificationCommand.execute({
          severity: 'success',
          detail: event.body.message,
        });
      }
    }),
    catchError((error, caught) => {
      notificationCommand.execute({
        severity: 'error',
        detail: error.error.message,
      });

      return throwError(() => caught);
    }),
  );
};
