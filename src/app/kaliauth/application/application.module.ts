import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainModule } from '@kaliauthdomain/domain.module';
import { InfrastructureModule } from '@kaliauthinfra/infrastructure.module';
import { GetAllUsersQuery } from '@kaliauthdomain/queries/user/getallusers.query';

@NgModule({
  providers: [GetAllUsersQuery],
  declarations: [],
  imports: [CommonModule, DomainModule, InfrastructureModule],
})
export class ApplicationModule {}
