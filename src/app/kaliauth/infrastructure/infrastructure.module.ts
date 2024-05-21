import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { globalInterceptor } from 'src/app/kalicore/infrastructure/interceptors/global.interceptor';

@NgModule({
  providers: [
    provideHttpClient(withFetch(), withInterceptors([globalInterceptor])),
  ],
  declarations: [],
  imports: [CommonModule],
})
export class InfrastructureModule {}
