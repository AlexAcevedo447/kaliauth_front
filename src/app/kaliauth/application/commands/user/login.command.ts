import IDomainResponse from '@kaliauthdomain/contracts/response.interface';
import { User } from '@kaliauthdomain/entities/user.entity';
import { AppGetAllUsersResponse } from './login.response';
import { Inject, Injectable } from '@angular/core';
import IServerResponse from '@kaliauthdomain/contracts/server.response';
import { LoginCommand } from '@kaliauthdomain/commands/user/login.command';
import ICommand from '@kaliauthdomain/contracts/command.interface';
import ILoginResult from '@kaliauthdomain/contracts/loginresult.interface';
import {
  CookieConfig,
  StoreCacheKeyCommand,
} from 'src/app/kalicore/infrastructure/commands/storecachekey.command';

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
    @Inject(StoreCacheKeyCommand)
    private readonly storeCookieCommand: ICommand<CookieConfig, void>,
  ) {}

  private async prepare(data?: Partial<User>): Promise<void> {
    this.domainResponse = await this.loginCommand.execute(data);
    this.appResponse = await this.domainResponse.getPayload();

    await this.storeCookieCommand.execute({
      key: 'token',
      value: this.appResponse.data?.token,
    });
  }

  async execute(data?: Partial<User>): Promise<IDomainResponse<ILoginResult>> {
    await this.prepare(data);
    return new AppGetAllUsersResponse(this.appResponse);
  }
}
