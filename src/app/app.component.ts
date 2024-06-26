import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KaliauthModule } from './kaliauth/kaliauth.module';
import { KalicoreModule } from './kalicore/kalicore.module';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [CookieService],
  imports: [
    CommonModule,
    RouterOutlet,
    KaliauthModule,
    KalicoreModule,
    ToastModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
