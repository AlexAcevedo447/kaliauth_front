import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AppLoginCommand } from '@kaliauthapp/commands/user/login.command';
import { User } from '@kaliauthdomain/entities/user.entity';
import { BasicButtonComponent } from '@buttoncomponents/basic-button/basic-button.component';
import { InputFloatComponent } from '@inputcomponents/input-float/input-float.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    InputFloatComponent,
    BasicButtonComponent,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  loginForm!: FormGroup<{
    [K in keyof Partial<User>]: FormControl<string | null>;
  }>;

  constructor(private readonly command: AppLoginCommand) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup<{
      [K in keyof Partial<User>]: FormControl<string | null>;
    }>({
      username: new FormControl<string>('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl<string>('', [Validators.required]),
    });
  }

  private async prepare() {
    await this.command.execute(this.loginForm.value as Partial<User>);
  }

  onSubmit() {
    this.prepare();
  }
}
