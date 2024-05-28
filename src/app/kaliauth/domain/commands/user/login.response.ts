import ILoginResult from '@kaliauthdomain/contracts/loginresult.interface';
import IDomainResponse from '@kaliauthdomain/contracts/response.interface';
import IServerResponse from '@kaliauthdomain/contracts/server.response';

export class LoginResponse implements IDomainResponse<ILoginResult> {
  constructor(private data: IServerResponse<ILoginResult>) {}

  async getPayload(): Promise<IServerResponse<ILoginResult>> {
    return this.data;
  }
}
