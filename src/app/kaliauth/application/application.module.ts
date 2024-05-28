import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule } from '@kaliauthdomain/domain.module';
import { InfrastructureModule } from '@kaliauthinfra/infrastructure.module';
import { GetAllUsersQuery } from '@kaliauthdomain/queries/user/getallusers.query';
import { LoginCommand } from '@kaliauthdomain/commands/user/login.command';

@NgModule({
  providers: [GetAllUsersQuery, LoginCommand],
  declarations: [],
  imports: [CommonModule, DomainModule, InfrastructureModule],
})
export class ApplicationModule {}
