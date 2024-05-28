import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfrastructureModule } from '@kaliauthinfra/infrastructure.module';
import { GetAllUsersRepository } from '@kaliauthinfra/queries/user/getallusers.repository';
import { LoginRepository } from '@kaliauthinfra/commands/user/login.repository';

@NgModule({
  providers: [GetAllUsersRepository, LoginRepository],
  declarations: [],
  imports: [CommonModule, InfrastructureModule],
})
export class DomainModule {}
