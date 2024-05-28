import ILoginResult from '@kaliauthdomain/contracts/loginresult.interface';
import IDomainResponse from '@kaliauthdomain/contracts/response.interface';
import IServerResponse from '@kaliauthdomain/contracts/server.response';

export class InfraLoginResponse implements IDomainResponse<ILoginResult> {
  private response: IServerResponse<ILoginResult>;

  constructor(private serverResponse: IServerResponse<ILoginResult>) {
    this.response = this.serverResponse;
  }

  async getPayload(): Promise<IServerResponse<ILoginResult>> {
    return this.response;
  }
}
