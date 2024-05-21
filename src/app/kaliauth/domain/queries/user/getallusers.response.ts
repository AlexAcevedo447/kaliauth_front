import IDomainResponse from '@kaliauthdomain/contracts/response.interface';
import IServerResponse from '@kaliauthdomain/contracts/server.response';
import { User } from '@kaliauthdomain/entities/user.entity';

export class GetAllUsersResponse implements IDomainResponse<User[]> {
  constructor(private data: IServerResponse<User[]>) {}

  async getPayload(): Promise<IServerResponse<User[]>> {
    return this.data;
  }
}
