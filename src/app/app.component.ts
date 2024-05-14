import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KaliauthModule } from './kaliauth/kaliauth.module';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KaliauthModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
