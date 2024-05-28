import IDomainResponse from '@kaliauthdomain/contracts/response.interface';
import { User } from '@kaliauthdomain/entities/user.entity';
import { AppGetAllUsersResponse } from './login.response';
import { Inject, Injectable } from '@angular/core';
import IServerResponse from '@kaliauthdomain/contracts/server.response';
import { LoginCommand } from '@kaliauthdomain/commands/user/login.command';
import ICommand from '@kaliauthdomain/contracts/command.interface';
import ILoginResult from '@kaliauthdomain/contracts/loginresult.interface';

@Injectable({ providedIn: 'root' })
export class AppLoginCommand
  implements ICommand<Partial<User>, IDomainResponse<ILoginResult>>
{
  private domainResponse!: IDomainResponse<ILoginResult>;
  private appResponse!: IServerResponse<ILoginResult>;

  constructor(
    @Inject(LoginCommand)
    private readonly loginCommand: ICommand<
      Partial<User>,
      IDomainResponse<ILoginResult>
    >,
  ) {}

  private async prepare(data?: Partial<User>): Promise<void> {
    this.domainResponse = await this.loginCommand.execute(data);
    this.appResponse = await this.domainResponse.getPayload();
  }

  async execute(data?: Partial<User>): Promise<IDomainResponse<ILoginResult>> {
    await this.prepare(data);
    return new AppGetAllUsersResponse(this.appResponse);
  }
}
