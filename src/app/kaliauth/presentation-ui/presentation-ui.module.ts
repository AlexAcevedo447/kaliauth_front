import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationModule } from '@kaliauthapp/application.module';
import { DomainModule } from '@kaliauthdomain/domain.module';
import { InfrastructureModule } from '@kaliauthinfra/infrastructure.module';
import { AppGetAllUsersQuery } from '@kaliauthapp/queries/user/getallusers.query';

@NgModule({
  providers: [AppGetAllUsersQuery],
  declarations: [],
  imports: [
    CommonModule,
    ApplicationModule,
    DomainModule,
    InfrastructureModule,
  ],
  exports: [ApplicationModule, DomainModule, InfrastructureModule],
})
export class PresentationUiModule {}
