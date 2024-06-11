import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { globalInterceptor } from '@kalicoreinfra/interceptors/global.interceptor';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  providers: [
    provideHttpClient(withFetch(), withInterceptors([globalInterceptor])),
    MessageService,
  ],
  declarations: [],
  imports: [CommonModule, ToastModule],
  exports: [ToastModule],
})
export class InfrastructureModule {}
