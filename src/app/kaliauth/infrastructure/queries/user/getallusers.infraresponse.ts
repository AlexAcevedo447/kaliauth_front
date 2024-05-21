import IDomainResponse from '@kaliauthdomain/contracts/response.interface';
import IServerResponse from '@kaliauthdomain/contracts/server.response';
import { User } from '@kaliauthdomain/entities/user.entity';

export class InfraGetAllUsersResponse implements IDomainResponse<User[]> {
  private response: IServerResponse<User[]>;

  constructor(private serverResponse: IServerResponse<User[]>) {
    this.response = this.serverResponse;
  }

  async getPayload(): Promise<IServerResponse<User[]>> {
    return this.response;
  }
}
