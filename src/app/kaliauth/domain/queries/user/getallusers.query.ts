import IQuery from '@kaliauthdomain/contracts/query.interface';
import IDomainResponse from '@kaliauthdomain/contracts/response.interface';
import { User } from '@kaliauthdomain/entities/user.entity';
import { GetAllUsersResponse } from './getallusers.response';
import { Inject, Injectable } from '@angular/core';
import { GetAllUsersRepository } from '@kaliauthinfra/queries/user/getallusers.repository';

@Injectable({ providedIn: 'root' })
export class GetAllUsersQuery implements IQuery<IDomainResponse<User[]>> {
  private response!: IDomainResponse<User[]>;
  constructor(
    @Inject(GetAllUsersRepository)
    private readonly getUsersRepo: IQuery<IDomainResponse<User[]>>,
  ) {}

  private async prepare(): Promise<void> {
    this.response = await this.getUsersRepo.execute();
  }

  async execute(): Promise<IDomainResponse<User[]>> {
    await this.prepare();
    const data = await this.response.getPayload();
    return new GetAllUsersResponse(data);
  }
}
