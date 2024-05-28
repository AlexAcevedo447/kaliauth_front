import { Component } from '@angular/core';
import { AppLoginCommand } from '@kaliauthapp/commands/user/login.command';
import ILoginResult from '@kaliauthdomain/contracts/loginresult.interface';
import IServerResponse from '@kaliauthdomain/contracts/server.response';
import { InfraNotificationCommand } from '@kaliauthinfra/commands/notification/notification.command';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ToastModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private data: IServerResponse<ILoginResult> = {};

  constructor(
    private readonly command: AppLoginCommand,
    private readonly notificationCommand: InfraNotificationCommand,
  ) {
    this.prepare();
  }

  private async prepare() {
    const response = await this.command.execute({
      username: 'andres.maldonado@gmail.com',
      password: 'andresmaldonado',
    });

    this.data = await response.getPayload();
  }
}
