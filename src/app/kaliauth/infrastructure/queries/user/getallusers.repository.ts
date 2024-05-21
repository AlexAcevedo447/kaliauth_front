import IQuery from '@kaliauthdomain/contracts/query.interface';
import IDomainResponse from '@kaliauthdomain/contracts/response.interface';
import { User } from '@kaliauthdomain/entities/user.entity';
import { InfraGetAllUsersResponse } from './getallusers.infraresponse';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import IServerResponse from '@kaliauthdomain/contracts/server.response';

@Injectable({ providedIn: 'root' })
export class GetAllUsersRepository implements IQuery<IDomainResponse<User[]>> {
  private response: IServerResponse<User[]> = {};

  constructor(private http: HttpClient) {}

  private async prepare() {
    this.http
      .get<IServerResponse<User[]>>(environment.apiUrl)
      .subscribe((response) => (this.response = response));
  }

  async execute(): Promise<IDomainResponse<User[]>> {
    this.prepare();
    return new InfraGetAllUsersResponse(this.response);
  }
}
