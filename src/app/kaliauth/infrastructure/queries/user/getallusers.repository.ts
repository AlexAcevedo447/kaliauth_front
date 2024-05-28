import IQuery from '@kaliauthdomain/contracts/query.interface';
import IDomainResponse from '@kaliauthdomain/contracts/response.interface';
import { User } from '@kaliauthdomain/entities/user.entity';
import { InfraGetAllUsersResponse } from './getallusers.infraresponse';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import IServerResponse from '@kaliauthdomain/contracts/server.response';
import { lastValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GetAllUsersRepository
  implements IQuery<undefined, IDomainResponse<User[]>>
{
  private response: IServerResponse<User[]> = {};

  constructor(private http: HttpClient) {}

  private async prepare() {
    const observable = this.http.get<IServerResponse<User[]>>(
      `${environment.apiUrl}/users`,
    );

    this.response = await lastValueFrom(observable);
  }

  async execute(): Promise<IDomainResponse<User[]>> {
    await this.prepare();
    console.log(this.response);
    return new InfraGetAllUsersResponse(this.response);
  }
}
