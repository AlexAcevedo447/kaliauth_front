import IDomainResponse from '@kaliauthdomain/contracts/response.interface';
import { InfraLoginResponse } from './login.infraresponse';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import IServerResponse from '@kaliauthdomain/contracts/server.response';
import ICommand from '@kaliauthdomain/contracts/command.interface';
import ILoginResult from '@kaliauthdomain/contracts/loginresult.interface';
import { User } from '@kaliauthdomain/entities/user.entity';
import { lastValueFrom } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class LoginRepository
  implements ICommand<Partial<User>, IDomainResponse<ILoginResult>>
{
  private response: IServerResponse<ILoginResult> = {};

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
  ) {}

  private async prepare(username: string, password: string) {
    const observable = this.http.post<IServerResponse<ILoginResult>>(
      `${environment.apiUrl}/users/login`,
      { username, password },
    );

    return await lastValueFrom(observable);
  }

  async execute(data: Partial<User>): Promise<IDomainResponse<ILoginResult>> {
    this.response = await this.prepare(
      data.username || '',
      data.password || '',
    );

    // if (!this.response.data?.token || !this.response.success) {
    //   this.messageService('Login Failed');
    // } else {
    //   this.messageService.sendMessage('Login Succeeded!');
    // }

    return new InfraLoginResponse(this.response);
  }
}
