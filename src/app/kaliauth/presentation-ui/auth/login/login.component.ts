import { Component } from '@angular/core';
import { ToastModule } from 'primeng/toast';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ToastModule, FormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {}
