import IDomainResponse from '@kaliauthdomain/contracts/response.interface';
import { LoginResponse } from './login.response';
import { Inject, Injectable } from '@angular/core';
import ICommand from '@kaliauthdomain/contracts/command.interface';
import ILoginResult from '@kaliauthdomain/contracts/loginresult.interface';
import { User } from '@kaliauthdomain/entities/user.entity';
import { LoginRepository } from '@kaliauthinfra/commands/user/login.repository';

@Injectable({ providedIn: 'root' })
export class LoginCommand
  implements ICommand<Partial<User>, IDomainResponse<ILoginResult>>
{
  private response!: IDomainResponse<ILoginResult>;
  constructor(
    @Inject(LoginRepository)
    private readonly loginRepo: ICommand<
      Partial<User>,
      IDomainResponse<ILoginResult>
    >,
  ) {}

  private async prepare(data: Partial<User>): Promise<void> {
    this.response = await this.loginRepo.execute(data);
  }

  async execute(data: Partial<User>): Promise<IDomainResponse<ILoginResult>> {
    await this.prepare(data);
    const payload = await this.response.getPayload();
    return new LoginResponse(payload);
  }
}
