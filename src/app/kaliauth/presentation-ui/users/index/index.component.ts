import { Component, OnInit } from '@angular/core';
import { AppGetAllUsersQuery } from '@kaliauthapp/queries/user/getallusers.query';
import IServerResponse from '@kaliauthdomain/contracts/server.response';
import { User } from '@kaliauthdomain/entities/user.entity';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent implements OnInit {
  private data!: IServerResponse<User[]>;

  constructor(private readonly query: AppGetAllUsersQuery) {}

  ngOnInit(): void {
    this.prepare();
  }

  private async prepare() {
    const payload = await this.query.execute();

    this.data = await payload.getPayload();
  }

  public getPayload() {
    return this.data;
  }
}
