import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { InfraNotificationCommand } from '@kaliauthinfra/commands/notification/notification.command';

@NgModule({
  providers: [InfraNotificationCommand],
  declarations: [],
  imports: [CommonModule, InfrastructureModule],
  exports: [InfrastructureModule],
})
export class KalicoreModule {}
