import IDomainResponse from '@kaliauthdomain/contracts/response.interface';
import IServerResponse from '@kaliauthdomain/contracts/server.response';

export class InfraNotificationResponse<T> implements IDomainResponse<T> {
  private response: IServerResponse<T>;

  constructor(private serverResponse: IServerResponse<T>) {
    this.response = this.serverResponse;
  }

  async getPayload(): Promise<IServerResponse<T>> {
    return this.response;
  }
}
