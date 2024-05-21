import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfrastructureModule } from '@kaliauthinfra/infrastructure.module';
import { GetAllUsersRepository } from '@kaliauthinfra/queries/user/getallusers.repository';

@NgModule({
  providers: [GetAllUsersRepository],
  declarations: [],
  imports: [CommonModule, InfrastructureModule],
})
export class DomainModule {}
