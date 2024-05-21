import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KaliauthModule } from './kaliauth/kaliauth.module';
import { KalicoreModule } from './kalicore/kalicore.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, KaliauthModule, KalicoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
