import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationModule } from '@kaliauthapp/application.module';
import { DomainModule } from '@kaliauthdomain/domain.module';
import { InfrastructureModule } from '@kaliauthinfra/infrastructure.module';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApplicationModule,
    DomainModule,
    InfrastructureModule,
  ]
})
export class PresentationUiModule { }
