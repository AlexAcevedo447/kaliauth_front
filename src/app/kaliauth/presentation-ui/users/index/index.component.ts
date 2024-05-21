import { Component } from '@angular/core';
import { AppGetAllUsersQuery } from '@kaliauthapp/queries/user/getallusers.query';
import IServerResponse from '@kaliauthdomain/contracts/server.response';
import { User } from '@kaliauthdomain/entities/user.entity';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [ToastModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent {
  private data!: IServerResponse<User[]>;

  constructor(private readonly query: AppGetAllUsersQuery) {
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
