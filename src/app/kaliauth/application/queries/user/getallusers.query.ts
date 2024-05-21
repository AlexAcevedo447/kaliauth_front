import IQuery from '@kaliauthdomain/contracts/query.interface';
import IDomainResponse from '@kaliauthdomain/contracts/response.interface';
import { User } from '@kaliauthdomain/entities/user.entity';
import { AppGetAllUsersResponse } from './getallusers.response';
import { Inject, Injectable } from '@angular/core';
import { GetAllUsersQuery } from '@kaliauthdomain/queries/user/getallusers.query';
import IServerResponse from '@kaliauthdomain/contracts/server.response';

@Injectable({ providedIn: 'root' })
export class AppGetAllUsersQuery implements IQuery<IDomainResponse<User[]>> {
  private domainResponse!: IDomainResponse<User[]>;
  private appResponse!: IServerResponse<User[]>;

  constructor(
    @Inject(GetAllUsersQuery)
    private readonly getUsersQuery: IQuery<IDomainResponse<User[]>>,
  ) {}

  private async prepare(): Promise<void> {
    this.domainResponse = await this.getUsersQuery.execute();
    this.appResponse = await this.domainResponse.getPayload();
  }

  async execute(): Promise<IDomainResponse<User[]>> {
    await this.prepare();
    return new AppGetAllUsersResponse(this.appResponse);
  }
}
