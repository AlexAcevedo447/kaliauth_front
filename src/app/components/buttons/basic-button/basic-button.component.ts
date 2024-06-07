import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-basic-button',
  standalone: true,
  imports: [ButtonModule, RippleModule],
  templateUrl: './basic-button.component.html',
  styleUrl: './basic-button.component.scss',
})
export class BasicButtonComponent {
  @Input() label: string = 'Default';
  @Input() type: string = 'submit';
  @Input() level: string = 'success';
}
