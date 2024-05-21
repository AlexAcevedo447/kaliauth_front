import {
  HttpEvent,
  HttpEventType,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, tap, catchError, throwError } from 'rxjs';

export const globalInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn,
): Observable<HttpEvent<any>> => {
  const messageService: MessageService = inject(MessageService);

  return next(req).pipe(
    tap((event) => {
      if (event.type === HttpEventType.Response) {
        messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: JSON.stringify(<HttpResponse<any>>event.body),
        });
      }
    }),
    catchError((error, caught) => {
      messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: error.error.message,
      });

      return throwError(() => caught);
    }),
  );
};
